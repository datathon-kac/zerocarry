import { action, observable } from 'mobx'

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

export enum AddScreen {
  Agreements,
  Airplane,
  Details,
  Payment,
}

export class Screen {
  @observable public global: GlobalScreen
  @observable public register: RegisterScreen
  @observable public add: AddScreen

  constructor() {
    this.global = GlobalScreen.FirstTime
    this.register = RegisterScreen.CreditCard
    this.add = AddScreen.Agreements
  }

  @action setGlobalScreen(screen: GlobalScreen) {
    this.global = screen
  }

  @action setRegisterScreen(screen: RegisterScreen) {
    this.register = screen
  }

  @action setAddScreen(screen: AddScreen) {
    this.add = screen
  }
}

export default new Screen()
