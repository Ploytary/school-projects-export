import './playground.component.scss';
import { BaseComponent } from '../base.component';
import { TimerComponent } from '../timer/timer.component';
import { TileComponent } from '../tile/tile.component';
import { InfoFieldComponent } from '../info-field/info-field.component';

export class PlaygroundComponent extends BaseComponent {
  constructor({ size, className }) {
    super({ className: [className, 'playground'] });

    const infoBar = new BaseComponent({ className: 'minesweeper__info-bar' });
    const steps = new InfoFieldComponent({ labelText: 'steps' });
    const timer = new TimerComponent({ className: 'minesweeper__timer' });
    infoBar.append(timer, steps);

    const board = new BaseComponent({
      className: ['minesweeper__board', 'board'],
    });
    const dataMatrix = [];
    for (let i = 0; i < size; i++) {
      const line = [];
      for (let j = 0; j < size; j++) {
        line.push(Math.random() < 10 / 100 ? 1 : 0);
      }
      dataMatrix.push(line);
    }

    dataMatrix.forEach((dataRow) => {
      const line = new BaseComponent({ className: 'minesweeper__tile-row' });
      board.append(line);
      for (let cellData of dataRow) {
        const newData = {
          isCovered: true,
          value: cellData === 1 ? '*' : cellData,
        };
        const tile = new TileComponent({ cellData: newData });
        line.append(tile);
      }
    });

    this.append(board);
  }
}
