import { BaseComponent } from '../components/base.component';
import { MinesweeperComponent } from '../components/minesweeper/minesweeper.component';

export class HomePage extends BaseComponent {
  constructor() {
    super({});
    const pageWrapper = new BaseComponent({ className: 'page-wrapper' });
    const minesweeper = new MinesweeperComponent();
    pageWrapper.append(minesweeper);
    this.append(pageWrapper);
  }
}
