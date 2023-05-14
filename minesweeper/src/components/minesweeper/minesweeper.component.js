import './minesweeper.component.scss';
import { BaseComponent } from '../base.component';
import { ControlPanelComponent } from '../control-panel/control-panel.component';
import { PlaygroundComponent } from '../playground/playground.component';

const BOARD_SIZE = 10;

export class MinesweeperComponent extends BaseComponent {
  constructor() {
    super({ className: ['minesweeper'] });

    const controlPanel = new ControlPanelComponent({
      className: 'minesweeper__control-panel',
    });

    const playground = new PlaygroundComponent({
      size: BOARD_SIZE,
      className: 'minesweeper__playground',
    });

    this.append(controlPanel, playground);
  }
}
