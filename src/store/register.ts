import { action, observable, computed } from 'mobx'

export enum RegisterScreens {
  CreditCard,
  Luggage,
}

export class Register {
  @observable screen: RegisterScreens
  @observable nameOnCard: string
  @observable cardNumber1: string
  @observable cardNumber2: string
  @observable cardNumber3: string
  @observable cardNumber4: string
  @observable expiryDateMonth: string
  @observable expiryDateYear: string
  @observable securityCode: string
  @observable zip: string
  @observable luggagePictureUrl: string

  constructor() {
    this.screen = RegisterScreens.CreditCard
    this.nameOnCard = ''
    this.cardNumber1 = ''
    this.cardNumber2 = ''
    this.cardNumber3 = ''
    this.cardNumber4 = ''
    this.expiryDateMonth = ''
    this.expiryDateYear = ''
    this.securityCode = ''
    this.zip = ''
    this.luggagePictureUrl = ''
  }

  @computed get cardNumber() {
    return this.cardNumber1 + this.cardNumber2 + this.cardNumber3 + this.cardNumber4
  }

  @computed get expiryDate() {
    return this.expiryDateMonth + '/' + this.expiryDateYear
  }

  @computed get isNameOnCardValid() {
    return this.nameOnCard !== ''
  }

  @computed get isCardNumberValid() {
    return (
      this.cardNumber1 !== '' &&
      this.cardNumber2 !== '' &&
      this.cardNumber3 !== '' &&
      this.cardNumber4 !== ''
    )
  }

  @computed get isExpiryDateValid() {
    return (
      this.expiryDateMonth !== '' &&
      this.expiryDateYear !== ''
    )
  }

  @computed get isSecurityCodeValid() {
    return this.securityCode !== ''
  }

  @computed get isZipValid() {
    return this.zip !== ''
  }

  @action setScreen(screen: RegisterScreens) {
    this.screen = screen
  }

  @action setNameOnCard(name: string) {
    this.nameOnCard = name
  }

  @action setCardNumber1(cardNumber: string) {
    this.cardNumber1 = cardNumber
  }

  @action setCardNumber2(cardNumber: string) {
    this.cardNumber2 = cardNumber
  }

  @action setCardNumber3(cardNumber: string) {
    this.cardNumber3 = cardNumber
  }

  @action setCardNumber4(cardNumber: string) {
    this.cardNumber4 = cardNumber
  }

  @action setExpiryDateMonth(date: string) {
    this.expiryDateMonth = date
  }

  @action setExpiryDateYear(date: string) {
    this.expiryDateYear = date
  }

  @action setSecurityCode(code: string) {
    this.securityCode = code
  }

  @action setZip(code: string) {
    this.zip = code
  }
}

export default new Register()
