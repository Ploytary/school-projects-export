import { BaseComponent } from '../components/base.component';
import { PlaygroundComponent } from '../components/playground/playground.component';
import { TileComponent } from '../components/tile/tile.component';
import { MinesweeperModel } from '../models/minesweeper.model';
import { neighbourLocationMap, LOSE_SIGN, WIN_SIGN } from '../utils/constants';
import { getMatrixComponentPosiiton } from '../utils/get-matrix-position';

export class PlaygroundController {
  playground = null;
  tileComponents = [];
  steps = 0;

  constructor(settings, container, onEndGameHandler) {
    this.settings = settings;
    this.container = container;
    this.onEndGameHandler = onEndGameHandler;
    this.dataChangeHandler = this.dataChangeHandler.bind(this);
    this.model = new MinesweeperModel();
  }

  render() {
    this.model.setModel(this.settings);
    this.model.setOnDataChangeHandler(this.dataChangeHandler);
    const data = this.model.getData();
    this.tileComponents = data.map((dataRow) => {
      return dataRow.map((cellData) => this.createTileComponent(cellData));
    });

    if (this.playground) {
      this.playground.destroy();
    }

    this.playground = new PlaygroundComponent({ className: 'minesweeper__playground' });
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
      if (tileComponent.isCovered) {
        this.steps++;
      }
      this.uncoverTile(tileComponent);
      if (tileComponent.value === '*') {
        this.showMines();
        this.stopPlaygroundEvents();
        this.onEndGameHandler(LOSE_SIGN);
      }

      const coveredTilesCount = this.tileComponents.flat(1).filter((component) => component.isCovered).length;
      const isAllTilesUncovered =
        coveredTilesCount -
          Math.floor(Math.pow(this.settings.boardSize, 2) * (this.settings.mineDensityPersentage / 100)) ===
        0;
      if (isAllTilesUncovered) {
        this.stopPlaygroundEvents();
        this.onEndGameHandler(WIN_SIGN, this.steps);
      }
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

  showMines() {
    const mines = this.tileComponents.flat(1).filter((component) => component.value === '*');
    mines.forEach((component) => this.uncoverTile(component));
  }

  stopPlaygroundEvents() {
    this.tileComponents.flat(1).forEach((component) => component.removeHandler());
  }
}
