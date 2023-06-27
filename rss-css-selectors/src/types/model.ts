export interface IGameLevel {
  helpTitle?: string;
  selectorName?: string;
  doThis: string;
  selector: string;
  syntax: string;
  help: string;
  examples?: string[];
  boardMarkup: string;
  isComplete?: boolean;
  isWithHelp?: boolean;
  isNew?: boolean;
}

export interface ISelectedLevel {
  levels: IGameLevel[];
  currentIndex: number;
  currentLevel: IGameLevel;
}
