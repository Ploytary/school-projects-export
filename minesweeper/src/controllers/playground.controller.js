import { BaseComponent } from '../components/base.component';
import { PlaygroundComponent } from '../components/playground/playground.component';
import { TileComponent } from '../components/tile/tile.component';
import { MinesweeperModel } from '../models/minesweeper.model';
import { neighbourLocationMap } from '../utils/constants';
import { getMatrixComponentPosiiton } from '../utils/get-matrix-position';

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

    const { lineIndex, cellIndex } = getMatrixComponentPosiiton(this.tileComponents, targetComponent);
    const newTileComponent = this.createTileComponent(newData);
    targetComponent.node.replaceWith(newTileComponent.node);
    targetComponent.destroy();
    targetComponent = null;
    this.tileComponents[lineIndex][cellIndex] = newTileComponent;
  }

  uncoverTile(tileComponent) {
    if (tileComponent.value === 0 && tileComponent.isCovered) {
      const componentPosition = getMatrixComponentPosiiton(this.tileComponents, tileComponent);
      const { cellIndex, lineIndex } = componentPosition;
      this.model.updateData({ id: tileComponent.id, isCovered: false });
      const size = this.tileComponents.length;
      neighbourLocationMap.forEach((location) => {
        if (
          lineIndex + location[0] >= 0 &&
          lineIndex + location[0] < size &&
          cellIndex + location[1] >= 0 &&
          cellIndex + location[1] < size
        ) {
          const neighbour = this.tileComponents[lineIndex + location[0]][cellIndex + location[1]];
          this.uncoverTile(neighbour);
        }
      });
    } else {
      this.model.updateData({ id: tileComponent.id, isCovered: false });
    }
  }
}
