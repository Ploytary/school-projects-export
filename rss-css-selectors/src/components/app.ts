import { getRandomInteger } from '../utils/get-random-integer';
import { BaseComponent } from './base.component';
import { ButtonComponent } from './button/button.component';
import { HelpComponent } from './help/help.component';
import { MenuComponent } from './menu/menu.component';
import { PageFooterComponent } from './page/page-footer.component';
import { PageHeaderComponent } from './page/page-header.component';
import { PageMainComponent } from './page/page-main.component';
import { GameLevelModel } from '../model/levels.model';
import { ISelectedLevel } from '../types/model';

const pageClass = 'page';
const ChildElementsClasses = {
  HEADER: `${pageClass}__header`,
  MAIN: `${pageClass}__container`,
  FOOTER: `${pageClass}__footer`,
};

export class App {
  pageHeader: BaseComponent<HTMLElement>;
  mainContainer: BaseComponent<HTMLElement>;
  pageFooter: BaseComponent<HTMLElement>;

  constructor() {
    this.pageHeader = new PageHeaderComponent({ className: ChildElementsClasses.HEADER });
    this.mainContainer = new PageMainComponent({ className: ChildElementsClasses.MAIN });
    this.pageFooter = new PageFooterComponent({ className: ChildElementsClasses.FOOTER });

    document.body.classList.add(pageClass);
    [this.pageHeader, this.mainContainer, this.pageFooter].forEach((component) =>
      document.body.append(component.getNode())
    );
  }

  getContainer() {
    return this.mainContainer;
  }
}

const app = new App();
const levels = new GameLevelModel().getLevels();
const currentIndex = getRandomInteger(0, levels.length - 1);
const currentLevel = levels[currentIndex];
const mainContainer = app.getContainer();
const levelInfoObject: ISelectedLevel = { levels, currentLevel, currentIndex };

const menu = new MenuComponent(levels, { className: 'task__menu', parentComponent: mainContainer });
const help = new HelpComponent(levelInfoObject, {
  className: 'task__help',
  parentComponent: mainContainer,
});

const selectorEnterButton = new ButtonComponent({
  className: ['button--code'],
  allyLabel: 'Apply selector',
  textContent: 'Enter',
  parentComponent: mainContainer,
});

const selectorHelpButton = new ButtonComponent({
  className: ['button--code'],
  allyLabel: 'Get help',
  textContent: 'Help',
  parentComponent: mainContainer,
});

const simpleButton = new ButtonComponent({
  textContent: `Help, Im stuck!`,
  parentComponent: mainContainer,
});
