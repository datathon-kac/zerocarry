import * as React from 'react'
import { ComponentTopApp } from '../Top/Add'
import { ComponentAddProgress } from './Progress'
import { ComponentButtonIcon } from '../Button'
import { screen, AddScreen, Add } from '../../store'
import { observer, inject } from 'mobx-react'

@inject('add')
@observer
export class ComponentAddAirplaneForm extends React.Component<{ add?: Add }> {
  onArrivalAirportCodeChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const add = this.props.add as Add
    add.setArrivalAirportCode(e.target.value)
  }
  onArrivalDateChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const add = this.props.add as Add
    add.setArrivalDate(e.target.value)
  }
  onArrivalTimeChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const add = this.props.add as Add
    add.setArrivalTime(e.target.value)
  }
  render() {
    if (!this.props.add) {
      throw new Error('add store is undefined')
    }
    return (
      <div className='c-add-airplane-form'>
        <div className='field'>
          <label className='label'>Arrival Airport Code</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              placeholder='ICN'
              value={this.props.add.arrivalAirportCode}
              onChange={this.onArrivalAirportCodeChanged}
            />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Arrival Date</label>
          <div className='control'>
            <input
              className='input'
              type='date'
              value={this.props.add.arrivalDate}
              onChange={this.onArrivalDateChanged}
            />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Arrival Time</label>
          <div className='control'>
            <input
              className='input'
              type='time'
              value={this.props.add.arrivalTime}
              onChange={this.onArrivalTimeChanged}
            />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Choose Airplane Code</label>
          <div className='select is-fullwidth'>
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}

export default class ComponentAddAirplane extends React.Component {
  render() {
    return (
      <div className='c-add-airplane'>
        <ComponentTopApp
          label='Add Luggage'
        />
        <ComponentAddProgress progressNum={1} />
        <ComponentAddAirplaneForm />
        <ComponentButtonIcon
          icon={['fal', 'arrow-down']}
          label='Next Step'
          isActivated={true}
          backgroundColor='#7200ff'
          isBottom={true}
          onClick={() => screen.setAddScreen(AddScreen.Details)}
        />
      </div>
    )
  }
}
