import './playground.component.scss';
import { BaseComponent } from '../base.component';
import { TimerComponent } from '../timer/timer.component';
import { InfoFieldComponent } from '../info-field/info-field.component';

export class PlaygroundComponent extends BaseComponent {
  infoBar = null;
  board = null;
  constructor({ className }) {
    super({ className: [className, 'playground'] });

    const steps = new InfoFieldComponent({ labelText: 'steps' });
    const timer = new TimerComponent({ className: 'minesweeper__timer' });
    this.infoBar = new BaseComponent({ className: 'minesweeper__info-bar' });
    this.infoBar.append(timer, steps);

    this.board = new BaseComponent({
      className: ['minesweeper__board', 'board'],
    });

    this.append(this.infoBar, this.board);
  }
}
