const CURRENT_LEVEL_KEY = 'currentLevel';

export abstract class StateService {
  static currentLevel: number = StateService.loadCurrentLevel();

  private static loadCurrentLevel(): number {
    const value = localStorage.getItem(CURRENT_LEVEL_KEY) ?? 0;
    return +value;
  }

  public static getCurrentLevel() {
    return StateService.currentLevel;
  }

  public static saveToStorage() {
    localStorage.setItem(CURRENT_LEVEL_KEY, this.currentLevel.toString());
  }

  public static setNextLevel() {
    this.currentLevel += 1;
  }

  public static setPrevLevel() {
    this.currentLevel -= 1;
  }
}
