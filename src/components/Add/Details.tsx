import * as React from 'react'
import { ComponentTopApp } from '../Top/Add'
import { ComponentAddProgress } from './Progress'
import { ComponentButtonIcon } from '../Button'
import { screen, AddScreen, Add } from '../../store'
import { inject, observer } from 'mobx-react'

@inject('add')
@observer
export class ComponentAddDetailsForm extends React.Component<{ add?: Add }> {
  onDeliveredToChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const add = this.props.add as Add
    add.setDeliveredTo(e.target.value)
  }
  onContactNumberChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const add = this.props.add as Add
    add.setContactNumber(e.target.value)
  }

  render() {
    if (!this.props.add) {
      throw new Error('add store is undefined')
    }
    return (
      <div className='c-add-details-form'>
        <div className='field'>
          <label className='label'>Delivered to</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              placeholder='Seoul, Korea'
              value={this.props.add.deliveredTo}
              onChange={this.onDeliveredToChanged}
            />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Contact number</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              placeholder='+821036319283'
              value={this.props.add.contactNumber}
              onChange={this.onContactNumberChanged}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default class ComponentAddDetails extends React.Component {
  render() {
    return (
      <div className='c-add-details'>
        <ComponentTopApp
          label='Add Luggage'
        />
        <ComponentAddProgress progressNum={2} />
        <ComponentAddDetailsForm />
        <ComponentButtonIcon
          icon={['fal', 'arrow-down']}
          label='Next Step'
          isActivated={true}
          backgroundColor='#7200ff'
          isBottom={true}
          onClick={() => screen.setAddScreen(AddScreen.Payment)}
        />
      </div>
    )
  }
}
