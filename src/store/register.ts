import { action, observable, computed } from 'mobx'

export class Register {
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
    const user = JSON.parse(localStorage.getItem('user') as string)
    this.nameOnCard = user.nameOnCard || ''
    this.cardNumber1 = user.cardNumber1 || ''
    this.cardNumber2 = user.cardNumber2 || ''
    this.cardNumber3 = user.cardNumber3 || ''
    this.cardNumber4 = user.cardNumber4 || ''
    this.expiryDateMonth = user.expiryDateMonth || ''
    this.expiryDateYear = user.expiryDateYear || ''
    this.securityCode = user.securityCode || ''
    this.zip = user.zip || ''
    this.luggagePictureUrl = user.luggagePictureUrl || ''
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

  @computed get isLuggagePictureUrlValid() {
    return this.luggagePictureUrl !== ''
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
