import * as React from 'react'
import { ComponentTopRequest } from '../Top'
import { ComponentRequestProgress } from './Progress'

export default class ComponentRequestPayment extends React.Component {
  render() {
    return (
      <div className='c-request-payment'>
        <ComponentTopRequest
          label='Request Delivery'
        />
        <ComponentRequestProgress progressNum={3} />
      </div>
    )
  }
}
