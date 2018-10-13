import { action, observable, computed } from 'mobx'

export class Request {
  @observable departureAirportCode: string
  @observable departureDate: string
  @observable departureTime: string
  @observable airplaneCode: string
  @observable deliveredTo: string
  @observable contactNumber: string
  @observable deliveredToLat: number
  @observable deliveredToLng: number

  @computed get departureDatetime() {
    const date = new Date(this.departureDate + 'T' + this.departureTime)
    return date.getTime() / 1000
  }

  constructor() {
    this.departureAirportCode = ''
    this.departureDate = ''
    this.departureTime = ''
    this.airplaneCode = ''
    this.deliveredTo = ''
    this.deliveredToLat = 0
    this.deliveredToLng = 0
    this.contactNumber = ''
  }

  init() {
    this.departureAirportCode = ''
    this.departureDate = ''
    this.departureTime = ''
    this.airplaneCode = ''
    this.deliveredTo = ''
    this.deliveredToLat = 0
    this.deliveredToLng = 0
    this.contactNumber = ''
  }

  @action setDepartureAirportCode(code: string) {
    this.departureAirportCode = code
  }
  @action setDepartureDate(date: string) {
    this.departureDate = date
  }
  @action setDepartureTime(time: string) {
    this.departureTime = time
  }
  @action setAirplaneCode(code: string) {
    this.airplaneCode = code
  }
  @action setDeliveredTo(address: string) {
    this.deliveredTo = address
  }
  @action setContactNumber(phoneNumber: string) {
    this.contactNumber = phoneNumber
  }
}

export default new Request()
