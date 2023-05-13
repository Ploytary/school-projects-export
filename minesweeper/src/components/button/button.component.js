import './button.component.scss';
import { BaseComponent } from '../base.component';

export class ButtonComponent extends BaseComponent {
  constructor({ textContent, a11yLabel, svg, className = [] }) {
    super({ tagName: 'button', className: [className, 'button'], textContent });

    if (svg) {
      if (Array.isArray(svg)) {
        svg.forEach((item) => {
          this.append(item);
        });
      } else {
        this.append(svg);
      }
    }

    if (a11yLabel) {
      const label = new BaseComponent({
        tagName: 'span',
        className: 'visually-hidden',
        textContent: a11yLabel,
      });
      this.append(label);
    }
  }
}
