import * as React from 'react'
import { ComponentTopRequest } from '../Top'
import { ComponentRequestProgress } from './Progress'
import { ComponentButtonIcon } from '../Button'
import { screen, RequestScreen, Request } from '../../store'
import { observer, inject } from 'mobx-react'
import axios from 'axios'

@inject('request')
@observer
export class ComponentRequestAirplaneForm extends React.Component<{ request?: Request }> {
  state = {
    airplaneCodes: [],
    airplanes: [],
  }

  requestFlightList = async () => {
    const request = this.props.request as Request
    const { data: airplanes } = await axios.get(`http://192.168.164.34:3000/api/flight?unixTime=${request.departureDatetime}&city=${request.departureAirportCode}`)
    this.setState({ airplanes })
  }

  onDepartureAirportCodeChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const request = this.props.request as Request
    request.setDepartureAirportCode(e.target.value)
  }
  onDepartureDateChanged = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const request = this.props.request as Request
    request.setDepartureDate(e.target.value)
    if (Number.isNaN(request.departureDatetime)) { return }
    await this.requestFlightList()
  }
  onDepartureTimeChanged = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const request = this.props.request as Request
    request.setDepartureTime(e.target.value)
    if (Number.isNaN(request.departureDatetime)) { return }
    await this.requestFlightList()
  }
  onAirplaneCodeChanged = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const request = this.props.request as Request
    request.setAirplane(this.state.airplanes[Number(e.target.value)])
  }
  render() {
    if (!this.props.request) {
      throw new Error('request store is undefined')
    }
    return (
      <div className='c-request-airplane-form'>
        <div className='field'>
          <label className='label'>Departure Airport Code</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              placeholder='ICN'
              value={this.props.request.departureAirportCode}
              onChange={this.onDepartureAirportCodeChanged}
            />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Departure Date</label>
          <div className='control'>
            <input
              className='input'
              type='date'
              value={this.props.request.departureDate}
              onChange={this.onDepartureDateChanged}
            />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Departure Time</label>
          <div className='control'>
            <input
              className='input'
              type='time'
              value={this.props.request.departureTime}
              onChange={this.onDepartureTimeChanged}
            />
          </div>
        </div>
        {this.state.airplanes.length > 0 && (
          <div className='field'>
            <label className='label'>Choose Airplane Code</label>
            <div className='select is-fullwidth'>
              <select onChange={this.onAirplaneCodeChanged}>
                <option>Select air</option>
                {this.state.airplanes.map((airplane: any, index) => (
                  <option value={index} key={airplane.fnum}>{airplane.fnum}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default class ComponentRequestAirplane extends React.Component {
  render() {
    return (
      <div className='c-request-airplane'>
        <ComponentTopRequest
          label='Request Delivery'
        />
        <ComponentRequestProgress progressNum={1} />
        <ComponentRequestAirplaneForm />
        <ComponentButtonIcon
          icon={['fal', 'arrow-down']}
          label='Next Step'
          isActivated={true}
          backgroundColor='#7200ff'
          isBottom={true}
          onClick={() => screen.setRequestScreen(RequestScreen.Details)}
        />
      </div>
    )
  }
}
