import { BaseComponent } from '../components/base.component';
import { PlaygroundComponent } from '../components/playground/playground.component';
import { TileComponent } from '../components/tile/tile.component';
import { MinesweeperModel } from '../models/minesweeper.model';

export class PlaygroundController {
  playground = new PlaygroundComponent({ className: 'minesweeper__playground' });
  tileComponents = [];

  constructor(container) {
    this.container = container;
    this.dataChangeHandler = this.dataChangeHandler.bind(this);
    this.model = new MinesweeperModel();
    this.model.setModel();
    this.model.setOnDataChangeHandler(this.dataChangeHandler);
  }

  render() {
    const data = this.model.getData();
    this.tileComponents = data.map((dataRow) => {
      return dataRow.map((cellData) => this.createTileComponent(cellData));
    });

    this.tileComponents.forEach((dataRow) => {
      const line = new BaseComponent({ className: 'minesweeper__tile-row' });
      for (let tileComponent of dataRow) {
        line.append(tileComponent);
      }
      this.playground.board.append(line);
    });

    this.container.append(this.playground);

    window.addEventListener('beforeunload', () => this.model.saveModel());
  }

  dataChangeHandler(newData) {
    this.rerenderTile(newData);
  }

  createTileComponent(cellData) {
    const tileComponent = new TileComponent({ cellData });
    tileComponent.setLeftClickHandler(() => {
      this.uncoverTile(tileComponent);
    });
    return tileComponent;
  }

  rerenderTile(newData) {
    let targetComponent;
    for (let line of this.tileComponents) {
      targetComponent = line.find((component) => component.id === newData.id);
      if (targetComponent) {
        break;
      }
    }

    const newTileComponent = this.createTileComponent(newData);
    targetComponent.node.replaceWith(newTileComponent.node);
    targetComponent.destroy();
    targetComponent = newTileComponent;
  }

  uncoverTile(tileComponent) {
    const SINGLE_MODE = true;
    if (SINGLE_MODE) {
      this.model.updateData({ id: tileComponent.id, isCovered: false });
    }
  }
}
