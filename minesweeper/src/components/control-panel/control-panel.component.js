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
  newGameButton = new ButtonComponent({ className: 'minesweeper__new-game-button', textContent: 'new game' });

  scoreButton = new ButtonComponent({ className: 'button--icon', a11yLabel: 'score' });
  themeButton = new ButtonComponent({ className: 'button--icon', a11yLabel: 'theme' });
  soundButton = new ButtonComponent({ className: 'button--icon', a11yLabel: 'sound' });
  expSettingButton = new ButtonExpandableComponent({
    icon: { template: SvgIcons.SETTINGS },
    min: RANGE_MIN_VALUE,
    max: RANGE_MAX_VALUE,
    value: RANGE_INIT_VALUE,
  });

  constructor({ className }) {
    super({ className: [className, 'control-panel'] });

    this.scoreButton.append(new SVGComponent({ template: SvgIcons.LIST }));
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

  setThemeButtonIcon(iconComponent) {
    this.themeButton.switchIcon(iconComponent);
  }

  setSoundButtonIcon(iconComponent) {
    this.soundButton.switchIcon(iconComponent);
  }

  setNewGameButtonClickHandler(handler) {
    this.newGameButton.getElement().addEventListener('click', handler);
  }
  setSettingsButtonClickHandler(handler) {
    this.expSettingButton.getElement().addEventListener('click', handler);
  }
  setScoreButtonClickHandler(handler) {
    this.scoreButton.getElement().addEventListener('click', handler);
  }
  setThemeButtonClickHandler(handler) {
    this.themeButton.getElement().addEventListener('click', handler);
  }
  setSoundButtonClickHandler(handler) {
    this.soundButton.getElement().addEventListener('click', handler);
  }
}
