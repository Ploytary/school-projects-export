import './control-panel.component.scss';

import { BaseComponent } from '../base.component';
import { ButtonComponent } from '../button/button.component';
import { ButtonExpandableComponent } from '../button/button-expandable.component';
import { ListComponent } from '../list.component';
import { SVGComponent } from '../svg.component';
import { SvgIcons } from '../../enums/svg-icons';

const RANGE_MIN_VALUE = 1;
const RANGE_MAX_VALUE = 3;
const RANGE_INIT_VALUE = 1;

export class ControlPanelComponent extends BaseComponent {
  constructor({ className }) {
    super({ className: [className, 'control-panel'] });

    this.newGameButton = new ButtonComponent({
      className: 'minesweeper__new-game-button',
      textContent: 'new game',
    });

    this.scoreButton = new ButtonComponent({
      className: 'button--icon',
      a11yLabel: 'score',
    });
    this.scoreButton.append(new SVGComponent({ template: SvgIcons.LIST }));

    this.themeButton = new ButtonComponent({
      className: 'button--icon',
      a11yLabel: 'theme',
    });
    this.themeButton.append(
      new SVGComponent({ className: 'day', template: SvgIcons.DAY }),
      new SVGComponent({ className: 'night', template: SvgIcons.NIGHT })
    );

    this.soundButton = new ButtonComponent({
      className: 'button--icon',
      a11yLabel: 'sound',
    });
    this.soundButton.append(
      new SVGComponent({ className: 'unmute', template: SvgIcons.UNMUTE }),
      new SVGComponent({ className: 'mute', template: SvgIcons.MUTE })
    );

    this.expSettingButton = new ButtonExpandableComponent({
      icon: { template: SvgIcons.SETTINGS },
      min: RANGE_MIN_VALUE,
      max: RANGE_MAX_VALUE,
      value: RANGE_INIT_VALUE,
    });

    const buttonGroup = new BaseComponent({
      className: 'minesweeper__button-group',
    });
    buttonGroup.append(this.newGameButton, this.expSettingButton);
    const buttonList = new ListComponent({
      tagName: 'ul',
      className: 'minesweeper__button-list',
      items: [this.scoreButton, this.themeButton, this.soundButton],
    });

    this.append(buttonGroup, buttonList);
  }
}
