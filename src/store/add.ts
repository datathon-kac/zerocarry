import { action, observable } from 'mobx'

export class Add {
  @observable arrivalAirportCode: string
  @observable arrivalDate: string
  @observable arrivalTime: string
  @observable airplaneCode: string
  @observable deliveredTo: string
  @observable contactNumber: string

  constructor() {
    this.arrivalAirportCode = ''
    this.arrivalDate = ''
    this.arrivalTime = ''
    this.airplaneCode = ''
    this.deliveredTo = ''
    this.contactNumber = ''
  }

  @action setArrivalAirportCode(code: string) {
    this.arrivalAirportCode = code
  }
  @action setArrivalDate(date: string) {
    this.arrivalDate = date
  }
  @action setArrivalTime(time: string) {
    this.arrivalTime = time
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

export default new Add()
