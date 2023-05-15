import './minesweeper.component.scss';
import { BaseComponent } from '../base.component';
import { ControlPanelComponent } from '../control-panel/control-panel.component';
import { PlaygroundController } from '../../controllers/playground.controller';

export class MinesweeperComponent extends BaseComponent {
  playgroundController = null;

  constructor() {
    super({ className: ['minesweeper'] });
    const controlPanel = new ControlPanelComponent({
      className: 'minesweeper__control-panel',
    });

    this.append(controlPanel);

    this.playgroundController = new PlaygroundController(this);
    this.playgroundController.render();
  }
}
