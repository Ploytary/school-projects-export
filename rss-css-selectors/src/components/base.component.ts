import { IBaseConfig } from '../types/constructor-config-options';

export class BaseComponent<T extends HTMLElement> {
  protected node: T;

  public constructor({ tagName = 'div', className = [], textContent = '', parentComponent }: IBaseConfig = {}) {
    this.node = document.createElement(tagName) as T;
    this.addClass(className);
    this.node.textContent = textContent;
    if (parentComponent) {
      parentComponent.append(this);
    }
  }

  public append(...components: (BaseComponent<HTMLElement> | SVGElement)[]): void {
    for (const component of components) {
      if (component instanceof BaseComponent) {
        this.node.append(component.getNode());
      } else {
        this.node.append(component);
      }
    }
  }

  public getNode(): HTMLElement {
    return this.node;
  }

  public addClass(className: IBaseConfig['className']): void {
    if (Array.isArray(className)) {
      this.node.classList.add(...className);
    } else {
      if (className) {
        this.node.classList.add(className);
      }
    }
  }

  public destroy(): void {
    this.node.remove();
  }
}
