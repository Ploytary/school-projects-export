import { ControlPanelComponent } from '../components/control-panel/control-panel.component';
import { SVGComponent } from '../components/svg.component';
import { SvgIcons } from '../enums/svg-icons';
import { ThemeValues } from '../utils/constants';

export class ControlPanelController {
  controlPanelComponent = new ControlPanelComponent({ className: 'minesweeper__control-panel' });

  constructor(
    settings,
    container,
    onStartGameButtonClickHandler,
    onThemeChangeHandler,
    onSoundChangeHandler,
    onScoreTableButtonClickHandler
  ) {
    this.settings = settings;
    this.container = container;
    this.onStartGameButtonClickHandler = onStartGameButtonClickHandler;
    this.onThemeChangeHandler = onThemeChangeHandler;
    this.onSoundChangeHandler = onSoundChangeHandler;
    this.onScoreTableButtonClickHandler = onScoreTableButtonClickHandler;
  }

  render() {
    this.setHandlers();
    this.container.append(this.controlPanelComponent);

    this.switchSoundButtonIcon();
    this.switchThemeButtonIcon();
  }

  setHandlers() {
    this.controlPanelComponent.setNewGameButtonClickHandler(() => {
      this.onStartGameButtonClickHandler();
    });
    this.controlPanelComponent.setSettingsButtonClickHandler();
    this.controlPanelComponent.setScoreButtonClickHandler(() => {
      this.onScoreTableButtonClickHandler();
    });
    this.controlPanelComponent.setThemeButtonClickHandler(() => {
      this.onThemeChangeHandler();
      this.switchThemeButtonIcon();
    });
    this.controlPanelComponent.setSoundButtonClickHandler(() => {
      this.onSoundChangeHandler();
      this.switchSoundButtonIcon();
    });
  }

  switchSoundButtonIcon() {
    const soundButtonIcon = new SVGComponent({
      template: this.settings.mute === false ? SvgIcons.MUTE : SvgIcons.UNMUTE,
    });
    this.controlPanelComponent.setSoundButtonIcon(soundButtonIcon);
  }

  switchThemeButtonIcon() {
    const themeButtonIcon = new SVGComponent({
      template: this.settings.theme === ThemeValues.LIGHT ? SvgIcons.NIGHT : SvgIcons.DAY,
    });
    this.controlPanelComponent.setThemeButtonIcon(themeButtonIcon);
  }
}
