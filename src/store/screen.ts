import { action, computed, observable } from 'mobx'

export enum Screens {
  FirstTime,
  Register,
  Luggages,
  Add,
}

export class Screen {
  @observable public now: Screens

  constructor() {
    this.now = Screens.FirstTime
  }

  @action
  public setScreen(screen: Screens) {
    this.now = screen
  }
}

export default new Screen()
