import { HelpComponent } from '../components/help/help.component';
import { MenuComponent } from '../components/menu/menu.component';
import { PlaygroundComponent } from '../components/playground/playground.component';
import { TaskComponent, componentBaseConfig } from '../components/task/task.component';
import { TaskModel } from '../models/task.model';
import { IGameLevel, ISelectedLevel } from '../types/model';
import { StateService } from './state.service';

const ChildrenClasses = {
  PLAYGROUND: `${componentBaseConfig.className}__playground`,
  HELP: `${componentBaseConfig.className}__help`,
  HELP_SELECTED_STATUS: `${componentBaseConfig.className}__help--selected`,
  MENU: `${componentBaseConfig.className}__menu`,
  MENU_SELECTED_STATUS: `${componentBaseConfig.className}__menu--selected`,
};

export class TaskService {
  taskModel: TaskModel = new TaskModel();
  levels: IGameLevel[] = this.taskModel.getLevels();
  taskComponent: TaskComponent = new TaskComponent();
  helpComponent: HelpComponent;
  menuComponent: MenuComponent;
  playgroundComponent: PlaygroundComponent;
  container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
    this.container.append(this.taskComponent.getNode());
    this.setComponentHandlers();
    StateService.setChangeLevelHandler(this.OnChangeLevelHandler.bind(this));
    const currentLevelIndex = StateService.getCurrentLevel();

    const { helpComponent, menuComponent, playgroundComponent } = this.render(currentLevelIndex);
    this.helpComponent = helpComponent;
    this.menuComponent = menuComponent;
    this.playgroundComponent = playgroundComponent;
  }

  private OnChangeLevelHandler() {
    this.helpComponent.destroy();
    this.menuComponent.destroy();
    this.playgroundComponent.destroy();
    this.render(StateService.getCurrentLevel());
  }

  private render(levelIndex: number) {
    const currentLevel = this.levels[levelIndex];

    const playgroundComponent = new PlaygroundComponent(currentLevel, {
      className: ChildrenClasses.PLAYGROUND,
    });

    const levels = this.levels;
    const levelInfoObject: ISelectedLevel = { levels, currentLevel };
    const helpComponent = new HelpComponent(levelInfoObject, {
      className: ChildrenClasses.HELP,
    });
    const menuComponent = new MenuComponent(levelInfoObject, {
      className: ChildrenClasses.MENU,
    });

    this.playgroundComponent = playgroundComponent;
    this.helpComponent = helpComponent;
    this.menuComponent = menuComponent;
    this.taskComponent.append(playgroundComponent, helpComponent, menuComponent);

    this.setChildComponentsHandlers();

    return { playgroundComponent, helpComponent, menuComponent };
  }

  private setComponentHandlers() {
    this.taskComponent.setPanelHelpButtonClickHandler(this.OnPanelHelpButtonClickHandler.bind(this));
    this.taskComponent.setPanelMenuButtonClickHandler(this.OnPanelMenuButtonClickHandler.bind(this));
    this.taskComponent.setAreaClickHandler(this.OnTaskAreaClickHandler.bind(this));
  }

  private setChildComponentsHandlers() {
    this.menuComponent.setCloseButtonClickHandler(this.OnMenuCloseButtonClickHandler.bind(this));
    this.menuComponent.setResetButtonClickHandler(this.OnMenuResetButtonClickHandler.bind(this));
    this.menuComponent.setListItemClickHandler(this.OnMenuListItemClickHandler);

    this.helpComponent.setPrevLevelButtonClickHandler(this.OnHelpPrevLevelButtonClickHandler.bind(this));
    this.helpComponent.setNextLevelButtonClickHandler(this.OnHelpNextLevelButtonClickHandler.bind(this));
    this.helpComponent.setMenuButtonClickHandler(this.OnHelpMenuButtonClickHandler.bind(this));
  }

  private OnPanelMenuButtonClickHandler() {
    this.menuComponent.addClass(ChildrenClasses.MENU_SELECTED_STATUS);
  }

  private OnPanelHelpButtonClickHandler() {
    this.helpComponent.addClass(ChildrenClasses.HELP_SELECTED_STATUS);
  }

  private OnMenuCloseButtonClickHandler() {
    this.menuComponent.removeClass(ChildrenClasses.MENU_SELECTED_STATUS);
  }

  private OnMenuResetButtonClickHandler() {
    console.log('reset data');
    this.taskModel.resetLevels();
    console.log(StateService.getCurrentLevel());
  }

  private OnMenuListItemClickHandler(itemIndex: number) {
    console.log('click on item');
    StateService.setLevel(itemIndex);
    console.log(StateService.getCurrentLevel());
  }

  private OnHelpPrevLevelButtonClickHandler() {
    if (StateService.getCurrentLevel() === 0) {
      return;
    }
    console.log('prev');
    StateService.setPrevLevel();
    console.log(StateService.getCurrentLevel());
  }

  private OnHelpNextLevelButtonClickHandler() {
    if (StateService.getCurrentLevel() >= this.levels.length - 1) {
      return;
    }
    console.log('next');
    StateService.setNextLevel();
    console.log(StateService.getCurrentLevel());
  }

  private OnHelpMenuButtonClickHandler() {
    this.menuComponent.addClass(ChildrenClasses.MENU_SELECTED_STATUS);
  }

  private OnTaskAreaClickHandler(evt: MouseEvent) {
    if (!(evt.target instanceof Element)) {
      return;
    }
    const isHelpComponent = !!evt.target.closest('.' + ChildrenClasses.HELP_SELECTED_STATUS);
    const isPanelButtonComponent = !!evt.target.closest('.' + this.taskComponent.buttonPanel.getNode().className);

    if (!isHelpComponent && !isPanelButtonComponent) {
      this.helpComponent.removeClass(ChildrenClasses.HELP_SELECTED_STATUS);
    }
  }
}
