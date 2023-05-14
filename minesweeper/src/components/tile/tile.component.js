import './tile.component.scss';
import { BaseComponent } from '../base.component';
import { SVGComponent } from '../svg.component';
import { SvgIcons } from '../../enums/svg-icons';

const COLOR_VARIANT_CLASSES = [
  'tile__content--color-variant-1st',
  'tile__content--color-variant-2nd',
  'tile__content--color-variant-3rd',
];

export class TileComponent extends BaseComponent {
  constructor({ cellData, className = [] }) {
    super({ className: [className, 'tile'] });

    const { isCovered, value } = cellData;
    this.isCovered = isCovered;
    this.value = value;

    if (this.value === '*') {
      this.content = new BaseComponent({
        tagName: 'span',
        className: 'tile__content',
      });
      this.content.append(new SVGComponent({ template: SvgIcons.MINE }));
    } else {
      let colorVariantClass;
      if (value === '*') {
        colorVariantClass = '';
      } else {
        const cycle = COLOR_VARIANT_CLASSES.length;
        const index = value % cycle;
        colorVariantClass = index === 0 ? '' : COLOR_VARIANT_CLASSES[index];
      }
      this.content = new BaseComponent({
        tagName: 'span',
        className: [colorVariantClass, 'tile__content'],
        textContent: this.value,
      });
    }

    this.cover = new BaseComponent({ className: 'tile__cover' });
    this.append(this.content, this.cover);
  }
}
