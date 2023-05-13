import { BaseComponent } from './base.component';
import { createElementFromTemplate } from '../utils/create-element-from-template';

export class SVGComponent extends BaseComponent {
  constructor({ className, template }) {
    super({});
    this.node = createElementFromTemplate(template);
    this.node.classList.add(className);
  }
}
