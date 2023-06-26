import { IBaseConfig } from '../types/constructor-config-options';

export class BaseComponent<T extends HTMLElement> {
  protected node: T;

  public constructor({
    tagName = 'div',
    className = [],
    textContent = '',
    parentComponent,
  }: Partial<IBaseConfig> = {}) {
    this.node = document.createElement(tagName) as T;
    this.addClass(className);
    this.node.textContent = textContent;
    if (parentComponent) {
      parentComponent.append(this);
    }
  }

  public append(...components: BaseComponent<HTMLElement>[]): void {
    for (const component of components) {
      this.node.append(component.getNode());
    }
  }

  public getNode(): HTMLElement {
    return this.node;
  }

  public addClass(className: IBaseConfig['className']): void {
    if (Array.isArray(className)) {
      this.node.classList.add(...className);
    } else {
      this.node.classList.add(className);
    }
  }

  public destroy(): void {
    this.node.remove();
  }
}
