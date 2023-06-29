import { BaseComponent } from './base.component';
import { PageFooterComponent } from './page/page-footer.component';
import { PageHeaderComponent } from './page/page-header.component';
import { PageMainComponent } from './page/page-main.component';
import { TaskComponent } from './task/task.component';

const pageClass = 'page';
const ChildElementsClasses = {
  HEADER: `${pageClass}__header`,
  MAIN: `${pageClass}__content`,
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
const task = new TaskComponent({ parentComponent: mainContainer });
