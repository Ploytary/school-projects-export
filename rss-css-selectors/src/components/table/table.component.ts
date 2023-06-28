import './table.component.scss';
import { IBaseConfig } from '../../types/constructor-config-options';
import { mergeConfigs } from '../../utils/merge-configs';
import { BaseComponent } from '../base.component';
import { GlobalClass } from '../../enums/global-class';
import { IGameLevel } from '../../types/model';

const componentBaseConfig: IBaseConfig = {
  tagName: 'section',
  className: 'table',
};

const ElementsText = {
  COMPONENT_ALLY_TITLE: 'CSS representation table',
};

const ChildrenClasses = {
  ROOT: componentBaseConfig.className,
  SURFACE: `${componentBaseConfig.className}__surface`,
  NAMETAG_PLACE: `${componentBaseConfig.className}__nametag-place`,
  NAMETAG: `${componentBaseConfig.className}__nametag`,
  DISHES_PLACE: `${componentBaseConfig.className}__dishes`,
  EDGE: `${componentBaseConfig.className}__edge`,
  LEG: `${componentBaseConfig.className}__leg`,
};

const AnimationClasses = {
  START: 'pop',
  TARGET_ELEMENT: 'strobe',
  WRONG_ELEMENT: 'shake',
  RIGHT_ELEMENT: 'clean',
};

export class TableComponent extends BaseComponent<HTMLElement> {
  levelElements: HTMLElement[];
  targetElements: HTMLElement[];
  dishesPlace: BaseComponent<HTMLElement>;

  constructor(level: IGameLevel, constructorConfig?: IBaseConfig) {
    const resultConfig = mergeConfigs<IBaseConfig>(componentBaseConfig, constructorConfig);
    super(resultConfig);

    new BaseComponent({
      tagName: 'h3',
      className: GlobalClass.ALLY_HIDDEN,
      textContent: ElementsText.COMPONENT_ALLY_TITLE,
      parentComponent: this,
    });

    const { boardMarkup, selector } = level;
    const tableSurface = new BaseComponent({ className: ChildrenClasses.SURFACE, parentComponent: this });
    const nametagPlace = new BaseComponent({ className: ChildrenClasses.NAMETAG_PLACE, parentComponent: tableSurface });
    this.dishesPlace = new BaseComponent({ className: ChildrenClasses.DISHES_PLACE, parentComponent: tableSurface });

    const tableEdge = new BaseComponent({ className: ChildrenClasses.EDGE, parentComponent: this });
    const legsCount = 2;
    new Array(legsCount)
      .fill(0)
      .forEach(() => new BaseComponent({ className: ChildrenClasses.LEG, parentComponent: tableEdge }));

    this.dishesPlace.getNode().innerHTML = boardMarkup;
    this.levelElements = Array.from(this.dishesPlace.getNode().children) as HTMLElement[];
    this.targetElements = this.setTaskTargetElements(selector);
  }

  private setTaskTargetElements(selector: string) {
    for (const element of this.levelElements) {
      element.classList.add(AnimationClasses.START);
    }

    const selectorElements = Array.from(this.dishesPlace.getNode().querySelectorAll(selector));
    this.levelElements[0].addEventListener('animationend', () => {
      for (const element of this.levelElements) {
        element.classList.remove(AnimationClasses.START);
      }
      for (const element of selectorElements) {
        element.classList.add(AnimationClasses.TARGET_ELEMENT);
      }
    });
    return selectorElements as HTMLElement[];
  }

  public animateUserSelectorInput(selector: string) {
    const userSelectElements = Array.from(this.dishesPlace.getNode().querySelectorAll(selector)) as HTMLElement[];

    const isRightUserSelector = userSelectElements.every((userSelectElement) =>
      this.targetElements.includes(userSelectElement)
    );

    if (isRightUserSelector) {
      userSelectElements.forEach((element) => element.classList.add(AnimationClasses.RIGHT_ELEMENT));
    } else {
      userSelectElements.forEach((element) => element.classList.add(AnimationClasses.WRONG_ELEMENT));
    }
  }
}
