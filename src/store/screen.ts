import { action, computed, observable } from 'mobx'

export enum Screens {
  FirstTime,
  Register,
  Deliver,
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
