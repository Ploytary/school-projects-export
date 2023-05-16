import { BaseComponent } from '../components/base.component';
import { MinesweeperController } from '../controllers/minesweeper.controller';

export class HomePage extends BaseComponent {
  constructor() {
    super({});
    const pageWrapper = new BaseComponent({ className: 'page-wrapper' });
    this.append(pageWrapper);

    const minesweeperController = new MinesweeperController(pageWrapper);
    minesweeperController.render();
  }
}
