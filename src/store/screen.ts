import { action, computed, observable } from 'mobx'

export enum GlobalScreen {
  FirstTime,
  Register,
  Deliver,
  Add,
}

export enum RegisterScreen {
  CreditCard,
  Luggage,
}

export class Screen {
  @observable public global: GlobalScreen
  @observable public register: RegisterScreen

  constructor() {
    this.global = GlobalScreen.FirstTime
    this.register = RegisterScreen.CreditCard
  }

  @action
  public setGlobalScreen(screen: GlobalScreen) {
    this.global = screen
  }

  @action
  public setRegisterScreen(screen: RegisterScreen) {
    this.register = screen
  }
}

export default new Screen()
