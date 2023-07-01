import { PlaygroundComponent } from '../components/playground/playground.component';
import { IBaseConfig } from '../types/constructor-config-options';
import { IGameLevel } from '../types/model';
import { ChildrenClasses as TableClasses } from '../components/table/table.component';
import { ChildrenClasses as EditorClasses } from '../components/editor/editor.component';
import { GlobalClass } from '../enums/global-class';

export class PlaygroundService {
  container: HTMLElement;
  playgroundComponent: PlaygroundComponent;
  tableElements: Element[];
  markupElements: Element[];
  constructor(container: HTMLElement, level: IGameLevel, constructorConfig?: IBaseConfig) {
    this.container = container;
    this.playgroundComponent = new PlaygroundComponent(level, constructorConfig);
    this.container.append(this.playgroundComponent.getNode());

    this.tableElements = Array.from(document.querySelectorAll(`.${TableClasses.DISHES_PLACE} *`));
    this.markupElements = Array.from(document.querySelectorAll(`.${EditorClasses.HTML_VIEWER_CONTENT} *`));

    this.playgroundComponent.setCsssHoverHandler(
      this.OnElementHover.bind(this, this.tableElements, this.markupElements)
    );
    this.playgroundComponent.setMarkupHoverHandler(
      this.OnElementHover.bind(this, this.markupElements, this.tableElements)
    );
  }

  private OnElementHover(masterElements: Element[], slaveElements: Element[], evt: MouseEvent) {
    const elementsIndex = masterElements.findIndex((element) => element === evt.target);
    if (elementsIndex >= 0) {
      slaveElements[elementsIndex].classList.add(GlobalClass.LIGHTUP);
      masterElements[elementsIndex].addEventListener('mouseout', () => {
        slaveElements[elementsIndex].classList.remove(GlobalClass.LIGHTUP);
      });
      masterElements[elementsIndex].classList.add(GlobalClass.LIGHTUP);
      masterElements[elementsIndex].addEventListener('mouseout', () => {
        masterElements[elementsIndex].classList.remove(GlobalClass.LIGHTUP);
      });
      this.showTooltip(elementsIndex);
    }
    return this;
  }

  public destroy() {
    this.playgroundComponent.destroy();
  }

  private showTooltip(index: number) {
    const element = this.tableElements[index];
    this.playgroundComponent.setTooltip(element);
  }
}
