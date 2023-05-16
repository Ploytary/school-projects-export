import { getRandomInt } from '../utils/get-random-int';
import { neighbourLocationMap } from '../utils/constants';

const MODEL_STORAGE_KEY = 'minesweeperModel';
const MINE_CHAR = '*';

const isLoadSave = false;

export class MinesweeperModel {
  cells = [];
  onDataChangeHandler = null;

  setModel(settings) {
    const isHasSave = !!localStorage.getItem(MODEL_STORAGE_KEY);
    if (isHasSave && isLoadSave) {
      this.cells = JSON.parse(localStorage.getItem(MODEL_STORAGE_KEY));
    } else {
      this.cells = this.generateCellData(settings);
    }
  }

  saveModel() {
    localStorage.setItem(MODEL_STORAGE_KEY, JSON.stringify(this.cells));
  }

  getData() {
    return this.cells;
  }

  generateCellData({ boardSize, mineDensityPersentage }) {
    const mineToInsertCount = Math.floor(Math.pow(boardSize, 2) * (mineDensityPersentage / 100));
    const mineMatrix = new Array(boardSize).fill(0).map(() => new Array(boardSize).fill(0));
    let mineCount = 0;
    while (mineCount < mineToInsertCount) {
      const lineIndex = getRandomInt(0, boardSize - 1);
      const cellIndex = getRandomInt(0, boardSize - 1);
      if (mineMatrix[lineIndex][cellIndex] !== MINE_CHAR) {
        mineMatrix[lineIndex][cellIndex] = MINE_CHAR;
        mineCount += 1;
      }
    }

    let cellCounter = 0;
    const dataMatrix = mineMatrix.map((line, lineIndex) => {
      return line.map((cell, cellIndex) => {
        if (cell === MINE_CHAR) {
          const cellData = { id: cellCounter, isMarked: false, isCovered: true, value: cell };
          cellCounter += 1;
          return cellData;
        }

        let neighboursCount = 0;
        neighbourLocationMap.forEach((location) => {
          let neighbour;
          if (
            lineIndex + location[0] >= 0 &&
            lineIndex + location[0] < boardSize &&
            cellIndex + location[1] >= 0 &&
            cellIndex + location[1] < boardSize
          ) {
            neighbour = mineMatrix[lineIndex + location[0]][cellIndex + location[1]];
          }
          neighboursCount += neighbour === MINE_CHAR ? 1 : 0;
        });
        const cellData = { id: cellCounter, isMarked: false, isCovered: true, value: neighboursCount };
        cellCounter += 1;
        return cellData;
      });
    });

    return dataMatrix;
  }

  updateData(data) {
    let targetCell;
    for (let line of this.cells) {
      targetCell = line.find((cell) => cell.id === data.id);
      if (targetCell) {
        break;
      }
    }
    for (let prop in data) {
      targetCell[prop] = data[prop] !== undefined ? data[prop] : targetCell[prop];
    }
    this.onDataChangeHandler(targetCell);
  }

  setOnDataChangeHandler(handler) {
    this.onDataChangeHandler = handler;
  }
}
