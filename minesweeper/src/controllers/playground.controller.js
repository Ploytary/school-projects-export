import { BaseComponent } from '../components/base.component';
import { PlaygroundComponent } from '../components/playground/playground.component';
import { TileComponent } from '../components/tile/tile.component';
import { MinesweeperModel } from '../models/minesweeper.model';
import { neighbourLocationMap, LOSE_SIGN, WIN_SIGN } from '../utils/constants';
import { getMatrixComponentPosiiton } from '../utils/get-matrix-position';
import { AudioComponent } from '../components/audio.component';

const TIMER_STORAGE_KEY = 'timer';
const STEPS_STORAGE_KEY = 'steps';

export class PlaygroundController {
  playground = null;
  tileComponents = [];
  steps = 0;
  timer = 0;
  intervalId = null;
  isGameStarted = false;
  soundEffectsComponent = new AudioComponent();

  constructor(settings, container, onEndGameHandler) {
    this.settings = settings;
    this.container = container;
    this.onEndGameHandler = onEndGameHandler;
    this.dataChangeHandler = this.dataChangeHandler.bind(this);
    this.onStartGameHandler = this.onStartGameHandler.bind(this);
    this.model = new MinesweeperModel();
  }

  render() {
    window.addEventListener('beforeunload', () => {
      if (this.isGameStarted) {
        this.model.saveInStorage();
        localStorage.setItem(TIMER_STORAGE_KEY, this.timer);
        localStorage.setItem(STEPS_STORAGE_KEY, this.steps);
      }
    });
    const savedModel = this.model.loadFromStorage();
    if (savedModel) {
      this.startGame();
      return;
    }

    this.isGameStarted = false;
    this.model.setModel(this.settings, true);
    this.model.setOnDataChangeHandler(this.onStartGameHandler);
    const data = this.model.getData();
    this.createTileComponents(data);
    this.renderPlayground();
  }

  createTileComponents(data) {
    this.tileComponents = data.map((dataRow) => {
      return dataRow.map((cellData) => this.createTileComponent(cellData));
    });
  }

  renderPlayground() {
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
  }

  startGame(componentToIgnore) {
    this.isGameStarted = true;
    const ignoreCellCoorditanes = getMatrixComponentPosiiton(this.tileComponents, componentToIgnore);
    this.model.setModel(this.settings, false, ignoreCellCoorditanes);
    this.model.setOnDataChangeHandler(this.dataChangeHandler);
    const data = this.model.getData();
    this.createTileComponents(data);
    this.renderPlayground();
    const savedTimer = localStorage.getItem(TIMER_STORAGE_KEY);
    const savedSteps = localStorage.getItem(STEPS_STORAGE_KEY);
    this.timer = +savedTimer || 0;
    this.steps = +savedSteps || 0;
    this.playground.setTimerValue(this.timer);
    this.playground.setStepsComponentValue(this.steps);
    this.applySoundSettings();
    this.startTimer();
    this.model.saveInStorage();
  }

  dataChangeHandler(newData) {
    this.rerenderTile(newData);
  }

  onStartGameHandler(cellToIgnore) {
    this.startGame(cellToIgnore);
  }

  createTileComponent(cellData) {
    let tileComponent = new TileComponent({ cellData });
    tileComponent.setLeftClickHandler(() => {
      if (!this.isGameStarted) {
        const tilePosition = getMatrixComponentPosiiton(this.tileComponents, tileComponent);
        this.startGame(tileComponent);
        tileComponent = this.tileComponents[tilePosition.lineIndex][tilePosition.cellIndex];
      }

      if (tileComponent.isCovered) {
        this.steps++;
        this.setStepsField();
        this.soundEffectsComponent.playClickSound();
      }
      this.uncoverTile(tileComponent);
      if (tileComponent.value === '*') {
        this.showMines();
        this.stopPlaygroundEvents();
        this.isGameStarted = false;
        localStorage.removeItem(STEPS_STORAGE_KEY);
        localStorage.removeItem(TIMER_STORAGE_KEY);
        this.model.eraseFromStorage();
        this.onEndGameHandler(LOSE_SIGN);
        this.soundEffectsComponent.playLoseSound();
      }

      const coveredTilesCount = this.tileComponents.flat(1).filter((component) => component.isCovered).length;
      const isAllTilesUncovered =
        coveredTilesCount -
          Math.floor(Math.pow(this.settings.boardSize, 2) * (this.settings.mineDensityPersentage / 100)) ===
        0;
      if (isAllTilesUncovered) {
        this.stopPlaygroundEvents();
        this.isGameStarted = false;
        localStorage.removeItem(STEPS_STORAGE_KEY);
        localStorage.removeItem(TIMER_STORAGE_KEY);
        this.model.eraseFromStorage();
        this.onEndGameHandler(WIN_SIGN, this.steps, this.timer);
        this.soundEffectsComponent.playWinSound();
      }
    });
    return tileComponent;
  }

  restartGame() {
    this.model.eraseFromStorage();
    this.stopTimer();
    localStorage.removeItem(TIMER_STORAGE_KEY);
    localStorage.removeItem(STEPS_STORAGE_KEY);
    this.render();
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

  applySoundSettings() {
    if (this.settings.mute) {
      this.soundEffectsComponent.mute();
    } else {
      this.soundEffectsComponent.unmute();
    }
  }

  setTimerField({ minutes, seconds }) {
    this.playground.getTimerComponent().setTime({ minutes, seconds });
  }

  setStepsField() {
    this.playground.setStepsComponentValue(this.steps);
  }

  stopTimer() {
    clearInterval(this.intervalId);
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      this.timer += 1;
      this.playground.setTimerValue(this.timer);
    }, 1000);
  }

  getModel() {
    return this.model;
  }
}
