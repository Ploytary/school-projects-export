import './playground.component.scss';
import { BaseComponent } from '../base.component';
import { TimerComponent } from '../timer/timer.component';
import { InfoFieldComponent } from '../info-field/info-field.component';

export class PlaygroundComponent extends BaseComponent {
  infoBar = null;
  board = null;
  timer = null;
  steps = null;
  constructor({ className }) {
    super({ className: [className, 'playground'] });

    this.steps = new InfoFieldComponent({ labelText: 'steps' });
    this.timer = new TimerComponent({ className: 'minesweeper__timer' });
    this.infoBar = new BaseComponent({ className: 'minesweeper__info-bar' });
    this.infoBar.append(this.timer, this.steps);

    this.board = new BaseComponent({
      className: ['minesweeper__board', 'board'],
    });

    this.append(this.infoBar, this.board);
  }

  setStepsComponentValue(value) {
    const formattedValue = value.toString().padStart(2, '0');
    this.steps.setValue(formattedValue);
  }

  setTimerValue(seconds) {
    const formattedTime = {
      minutes: Math.floor(seconds / 60)
        .toString()
        .padStart(2, '0'),
      seconds: (seconds % 60).toString().padStart(2, '0'),
    };
    this.timer.setTime(formattedTime);
  }
}
