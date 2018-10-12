import { action, observable } from 'mobx'

export enum RegisterScreens {
  CreditCard,
  Luggage,
}

export class Register {
  @observable screen: RegisterScreens
  @observable nameOnCard: string
  @observable cardNumber: string
  @observable expiryDate: string
  @observable securityCode: string
  @observable zip: string

  constructor() {
    this.screen = RegisterScreens.CreditCard
    this.nameOnCard = ''
    this.cardNumber = ''
    this.expiryDate = ''
    this.securityCode = ''
    this.zip = ''
  }

  @action
  public setNameOnCard(name: string) {
    this.nameOnCard = name
  }

  @action
  public setCardNumber(cardNumber: string) {
    this.cardNumber = cardNumber
  }

  @action
  public setExpiryDate(date: string) {
    this.expiryDate = date
  }
}

export default new Register()
