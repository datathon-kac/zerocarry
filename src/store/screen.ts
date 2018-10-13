import { action, observable } from 'mobx'

export enum GlobalScreen {
  FirstTime,
  Register,
  Deliver,
  Request,
}

export enum RegisterScreen {
  CreditCard,
  Luggage,
}

export enum RequestScreen {
  Agreements,
  Airplane,
  Details,
  Payment,
}

export class Screen {
  @observable public global: GlobalScreen
  @observable public register: RegisterScreen
  @observable public request: RequestScreen

  constructor() {
    this.global = GlobalScreen.FirstTime
    this.register = RegisterScreen.CreditCard
    this.request = RequestScreen.Agreements
  }

  @action setGlobalScreen(screen: GlobalScreen) {
    this.global = screen
  }

  @action setRegisterScreen(screen: RegisterScreen) {
    this.register = screen
  }

  @action setRequestScreen(screen: RequestScreen) {
    this.request = screen
  }
}

export default new Screen()
