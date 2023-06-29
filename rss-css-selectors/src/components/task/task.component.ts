import './task.component.scss';
import { GameLevelModel } from '../../model/levels.model';
import { IBaseConfig } from '../../types/constructor-config-options';
import { ISelectedLevel } from '../../types/model';
import { getRandomInteger } from '../../utils/get-random-integer';
import { mergeConfigs } from '../../utils/merge-configs';
import { BaseComponent } from '../base.component';
import { HelpComponent } from '../help/help.component';
import { MenuComponent } from '../menu/menu.component';
import { PlaygroundComponent } from '../playground/playground.component';
import { Svg } from '../../enums/svg';
import { ButtonComponent } from '../button/button.component';

const componentBaseConfig: IBaseConfig = {
  tagName: 'section',
  className: 'task',
};

const ChildrenClasses = {
  ROOT: componentBaseConfig.className,
  PLAYGROUND: `${componentBaseConfig.className}__playground`,
  HELP: `${componentBaseConfig.className}__help`,
  MENU: `${componentBaseConfig.className}__menu`,
  BUTTON_PANEL: `${componentBaseConfig.className}__button-side-panel`,
};

export class TaskComponent extends BaseComponent<HTMLElement> {
  playground: PlaygroundComponent;
  panelMenuButton: ButtonComponent;
  panelHelpButton: ButtonComponent;
  help: HelpComponent;
  menu: MenuComponent;

  constructor(constructorConfig?: IBaseConfig) {
    const resultConfig = mergeConfigs<IBaseConfig>(componentBaseConfig, constructorConfig);
    super(resultConfig);

    const levels = new GameLevelModel().getLevels();
    const currentIndex = getRandomInteger(0, levels.length - 1);
    const currentLevel = levels[currentIndex];
    const levelInfoObject: ISelectedLevel = { levels, currentLevel, currentIndex };

    this.playground = new PlaygroundComponent(currentLevel, {
      className: ChildrenClasses.PLAYGROUND,
      parentComponent: this,
    });

    const { panelMenuButton, panelHelpButton } = this.setButtonPanel();
    this.panelMenuButton = panelMenuButton;
    this.panelHelpButton = panelHelpButton;

    this.help = new HelpComponent(levelInfoObject, {
      className: ChildrenClasses.HELP,
      parentComponent: this,
    });
    this.menu = new MenuComponent(levels, {
      className: ChildrenClasses.MENU,
      parentComponent: this,
    });
  }

  setButtonPanel() {
    const panel = new BaseComponent({ tagName: 'div', className: ChildrenClasses.BUTTON_PANEL, parentComponent: this });
    const panelMenuButton = new ButtonComponent({
      className: 'button--navigation',
      svgIcon: Svg.MENU,
      allyLabel: 'Menu',
      parentComponent: panel,
    });
    const panelHelpButton = new ButtonComponent({
      className: 'button--navigation',
      svgIcon: Svg.DESCRIPTION,
      allyLabel: 'Level description',
      parentComponent: panel,
    });
    return { panelMenuButton, panelHelpButton };
  }
}
