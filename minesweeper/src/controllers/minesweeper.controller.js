import { MinesweeperComponent } from '../components/minesweeper/minesweeper.component';
import { ControlPanelController } from './control-panel.controller';
import { PlaygroundController } from './playground.controller';
import { EndGameModalComponent } from '../components/modal/end-game-modal.component';
import { ThemeValues, WIN_SIGN, WIN_TEXT, LOSE_TEXT, LOSE_SIGN } from '../utils/constants';

const DEFAULT_SETTINGS = {
  boardSize: 10,
  mineDensityPersentage: 10,
  theme: ThemeValues.LIGHT,
  mute: false,
};

export class MinesweeperController {
  settings = DEFAULT_SETTINGS;
  minesweeperComponent = new MinesweeperComponent();
  controlPanelController = new ControlPanelController(
    this.settings,
    this.minesweeperComponent,
    this.onStartGameButtonClickHandler.bind(this),
    this.onThemeChangeHandler.bind(this),
    this.onSoundChangeHandler.bind(this)
  );
  playgroundController = new PlaygroundController(
    this.settings,
    this.minesweeperComponent,
    this.onGameEndHandler.bind(this)
  );
  timer = null;
  intervalId = null;

  constructor(container) {
    this.container = container;
  }

  render() {
    this.container.append(this.minesweeperComponent);
    this.controlPanelController.render();
    this.playgroundController.render();

    switch (this.settings.theme) {
      case 'light':
        this.minesweeperComponent.addClass(`theme-${ThemeValues.LIGHT}`);
        break;
      case 'night':
        this.minesweeperComponent.addClass(`theme-${ThemeValues.DARK}`);
        break;
    }
  }

  onThemeChangeHandler() {
    const prevThemeClassName = `theme-${this.settings.theme}`;
    this.minesweeperComponent.toggleClass(prevThemeClassName);

    this.settings.theme = this.settings.theme === ThemeValues.LIGHT ? ThemeValues.DARK : ThemeValues.LIGHT;

    const newThemeClassName = `theme-${this.settings.theme}`;
    this.minesweeperComponent.toggleClass(newThemeClassName);
  }

  onSoundChangeHandler() {
    this.settings.mute = !this.settings.mute;
    this.playgroundController.applySoundSettings();
  }

  onStartGameButtonClickHandler() {
    this.playgroundController.render();
  }

  onSubmitClickHandler() {
    this.modal.destroy();
    this.modal = null;
  }

  onGameEndHandler(sign, steps, timer) {
    this.playgroundController.stopTimer();
    this.playgroundController.stopPlaygroundEvents();
    switch (sign) {
      case WIN_SIGN: {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        const minuteSubstr = `${minutes === 0 ? '' : `${minutes}  ${minutes > 1 ? 'minutes' : 'minute'}`}`;
        const secondSubstr = `${seconds === 0 ? '' : `${seconds}  ${seconds > 1 ? 'seconds' : 'second'}`}`;
        const timeSubtring = `${minuteSubstr} ${secondSubstr}`;
        const winText = WIN_TEXT.replace('## seconds', timeSubtring).replace('#N', steps);
        this.modal = new EndGameModalComponent({ textContent: winText });
        break;
      }
      case LOSE_SIGN:
        this.modal = new EndGameModalComponent({ textContent: LOSE_TEXT });
    }
    this.modal.setSubmitClickHandler(this.onSubmitClickHandler.bind(this));
    this.minesweeperComponent.append(this.modal);
  }
}
