import * as React from 'react'
import { ComponentTopApp } from '../Top/Add'
import { ComponentAddProgress } from './Progress'

export default class ComponentAddPayment extends React.Component {
  render() {
    return (
      <div className='c-add-payment'>
        <ComponentTopApp
          label='Add Luggage'
        />
        <ComponentAddProgress progressNum={3} />
      </div>
    )
  }
}
