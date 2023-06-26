import { Svg } from '../enums/svg';
import { BaseComponent } from './base.component';
import { ButtonComponent } from './button/button.component';
import { PageFooterComponent } from './page/page-footer.component';
import { PageHeaderComponent } from './page/page-header.component';
import { PageMainComponent } from './page/page-main.component';

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

const mainContainer = app.getContainer();

const resetButton = new ButtonComponent({
  className: ['button--bordered', 'menu__reset-button'],
  textContent: 'Reset Progress',
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

const closeButton = new ButtonComponent({
  className: ['button--navigation'],
  allyLabel: 'Close menu',
  parentComponent: mainContainer,
  svgIcon: Svg.CROSS,
});

const simpleButton = new ButtonComponent({
  textContent: `Help, Im stuck!`,
  parentComponent: mainContainer,
});

const nextButton = new ButtonComponent({
  className: ['button--navigation', 'button--navigation-next'],
  allyLabel: 'Next task',
  svgIcon: Svg.ARROW,
  parentComponent: mainContainer,
});

const prevButton = new ButtonComponent({
  className: ['button--navigation', 'button--navigation-prev'],
  allyLabel: 'Prev task',
  svgIcon: Svg.ARROW,
  parentComponent: mainContainer,
});
