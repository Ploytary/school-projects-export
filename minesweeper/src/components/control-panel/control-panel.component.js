import './control-panel.component.scss';

import { BaseComponent } from '../base.component';
import { ButtonComponent } from '../button/button.component';
import { ButtonExpandableComponent } from '../button/button-expandable.component';
import { ListComponent } from '../list.component';
import { SVGComponent } from '../svg.component';
import { SvgIcons } from '../../enums/svg-icons';

const RANGE_MIN_VALUE = 0;
const RANGE_MAX_VALUE = 2;
const RANGE_INIT_VALUE = 0;

export class ControlPanelComponent extends BaseComponent {
  newGameButton = new ButtonComponent({ className: 'minesweeper__new-game-button', textContent: 'new game' });

  scoreButton = new ButtonComponent({ className: 'button--icon', a11yLabel: 'score' });
  themeButton = new ButtonComponent({ className: 'button--icon', a11yLabel: 'theme' });
  soundButton = new ButtonComponent({ className: 'button--icon', a11yLabel: 'sound' });
  burgerButton = new ButtonComponent({ className: 'button--icon', a11yLabel: 'burger' });

  constructor({ className }) {
    super({ className: [className, 'control-panel'] });
    const initRangeInputValue = localStorage.getItem('sliderPosition');
    this.expSettingButton = new ButtonExpandableComponent({
      icon: { template: SvgIcons.SETTINGS },
      min: RANGE_MIN_VALUE,
      max: RANGE_MAX_VALUE,
      value: initRangeInputValue || RANGE_INIT_VALUE,
    });

    this.scoreButton.append(new SVGComponent({ template: SvgIcons.LIST }));
    this.burgerButton.append(new SVGComponent({ template: SvgIcons.BURGER }));

    const buttonGroup = new BaseComponent({
      className: 'minesweeper__button-group',
    });
    buttonGroup.append(this.newGameButton, this.expSettingButton);
    const buttonList = new ListComponent({
      tagName: 'ul',
      className: 'minesweeper__button-list',
      items: [this.scoreButton, this.themeButton, this.soundButton, this.burgerButton],
    });

    this.append(buttonGroup, buttonList);
  }

  setThemeButtonIcon(iconComponent) {
    this.themeButton.switchIcon(iconComponent);
  }

  setSoundButtonIcon(iconComponent) {
    this.soundButton.switchIcon(iconComponent);
  }

  getSliderValue() {
    return this.expSettingButton.getSliderValue();
  }

  setNewGameButtonClickHandler(handler) {
    this.newGameButton.getElement().addEventListener('click', handler);
  }
  setSettingsButtonClickHandler(handler) {
    this.expSettingButton.getElement().addEventListener('change', handler);
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
