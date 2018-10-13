import * as React from 'react'
import { ComponentTopRequest } from '../Top'
import { ComponentRequestProgress } from './Progress'
import { observer, inject } from 'mobx-react'
import { Register, Request, Screen, GlobalScreen } from '../../store'
import axios from 'axios'

@inject('register', 'request', 'screen')
@observer
class ComponentRequestPaymentCard extends React.Component<{ register?: Register, request?: Request, screen?: Screen }> {
  state = {
    price: 0,
  }

  checkout = async () => {
    if (!this.props.request || !this.props.register || !this.props.screen) { return }
    const { data: arrivalAirportLocation } = await axios.get(`http://192.168.164.34:3000/api/airport?iataCode=${this.props.request.airplane.fdst}`)
    await axios.post('http://192.168.164.34:3000/api/delivers', {
      price: 1000,
      arrivalDatetime: new Date(this.props.request.airplane.scheduled_arrtime * 1000),
      destinationAddress: this.props.request.deliveredTo,
      flightCode: this.props.request.airplane.fnum,
      userId: this.props.register.userId,
      destinationLatLng: `(${this.props.request.deliveredToLat}, ${this.props.request.deliveredToLng})`,
      airportLatLng: `(${arrivalAirportLocation.lat}, ${arrivalAirportLocation.lng})`,
      airportCode: this.props.request.airplane.fdst,
    })
    this.props.screen.setGlobalScreen(GlobalScreen.Deliver)
  }

  async componentDidMount() {
    if (!this.props.request || !this.props.register) {
      throw new Error('store is undefined')
    }
    const { data: departureAirportLocation } = (
      await axios.get(`http://192.168.164.34:3000/api/airport?iataCode=${this.props.request.departureAirportCode}`)
    )
    const { data: { price } } = (
      await axios.get(`http://192.168.164.34:3000/api/price?airportLatLng=[${departureAirportLocation.lat},${departureAirportLocation.lng}]&destinationLatLng=[${this.props.request.deliveredToLat},${this.props.request.deliveredToLng}]`)
    )
    this.setState({
      price,
    })
  }
  render() {
    if (!this.props.request || !this.props.register) {
      throw new Error('request store is undefined')
    }
    return (
      <div className='c-request-payment-card'>
        <div className='c-request-payment-card__thumbnail' style={{ backgroundImage: `url('${this.props.register.luggagePictureUrl}')`}}/>
        <div className='c-request-payment-card__details'>
          <div className='columns'>
            <div className='column'>
              <div className='c-request-payment-card-item'>
                <div className='c-request-payment-card-item__title'>DEPARTURE DATE</div>
                <div className='c-request-payment-card-item__body'>
                  {
                    new Date(this.props.request.departureDate).getFullYear() + '-' +
                    ('0' + Number(new Date(this.props.request.departureDate).getMonth() + 1)).slice(-2) + '-' +
                    ('0' + new Date(this.props.request.departureDate).getDate()).slice(-2)
                  }
                </div>
              </div>
            </div>
            <div className='column'>
              <div className='c-request-payment-card-item'>
                <div className='c-request-payment-card-item__title'>DEPARTURE TIME</div>
                <div className='c-request-payment-card-item__body'>
                  {
                    ('0' + new Date('1970-01-01T' + this.props.request.departureTime + ':00').getHours()).slice(-2) + ':' +
                    ('0' + new Date('1970-01-01T' + this.props.request.departureTime + ':00').getMinutes()).slice(-2)
                  }
                </div>
              </div>
            </div>
          </div>
          <div className='columns'>
            <div className='column'>
              <div className='c-request-payment-card-item'>
                <div className='c-request-payment-card-item__title'>ARRIVAL DATE</div>
                <div className='c-request-payment-card-item__body'>
                  {
                    new Date(this.props.request.airplane.scheduled_arrtime * 1000).getFullYear() + '-' +
                    ('0' + Number(new Date(this.props.request.airplane.scheduled_arrtime * 1000).getMonth() + 1)).slice(-2) + '-' +
                    ('0' + new Date(this.props.request.airplane.scheduled_arrtime * 1000).getDate()).slice(-2)
                  }
                </div>
              </div>
            </div>
            <div className='column'>
              <div className='c-request-payment-card-item'>
                <div className='c-request-payment-card-item__title'>ARRIVAL TIME</div>
                <div className='c-request-payment-card-item__body'>
                  {
                    ('0' + new Date(this.props.request.airplane.scheduled_arrtime * 1000).getHours()).slice(-2) + ':' +
                    ('0' + new Date(this.props.request.airplane.scheduled_arrtime * 1000).getMinutes()).slice(-2)
                  }
                </div>
              </div>
            </div>
          </div>
          <div className='columns'>
            <div className='column'>
              <div className='c-request-payment-card-item'>
                <div className='c-request-payment-card-item__title'>DELIVERED TO</div>
                <div className='c-request-payment-card-item__body'>{this.props.request.deliveredTo}</div>
              </div>
            </div>
          </div>
          <div className='columns'>
            <div className='column'>
              <div className='c-request-payment-card-item'>
                <div className='c-request-payment-card-item__title'>CONTACT NUMBER</div>
                <div className='c-request-payment-card-item__body'>{this.props.request.contactNumber}</div>
              </div>
            </div>
          </div>
          <div className='c-request-payment-card__bottom'>
            <div className='c-request-payment-card__price'>
              {this.state.price}$
            </div>
            <div className='c-request-payment-card__checkout' onClick={this.checkout}>
              Check-out
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default class ComponentRequestPayment extends React.Component {
  render() {
    return (
      <div className='c-request-payment'>
        <ComponentTopRequest
          label='Request Delivery'
        />
        <ComponentRequestProgress progressNum={3} />
        <div className='c-request-payment__card-container'>
          <ComponentRequestPaymentCard />
        </div>
      </div>
    )
  }
}
