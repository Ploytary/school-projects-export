import { ControlPanelComponent } from '../components/control-panel/control-panel.component';
import { SVGComponent } from '../components/svg.component';
import { SvgIcons } from '../enums/svg-icons';
import { ThemeValues } from '../utils/constants';

export class ControlPanelController {
  controlPanelComponent = new ControlPanelComponent({ className: 'minesweeper__control-panel' });

  constructor(settings, container, onStartGameButtonClickHandler, onThemeChangeHandler, onSoundChangeHandler) {
    this.settings = settings;
    this.container = container;
    this.onStartGameButtonClickHandler = onStartGameButtonClickHandler;
  }

  render() {
    this.setHandlers();
    this.container.append(this.controlPanelComponent);
  }

  setHandlers() {
    this.controlPanelComponent.setNewGameButtonClickHandler(() => {
      this.onStartGameButtonClickHandler();
    });
  }
}
