import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Screen, RequestScreen } from '../../store'
import { ComponentRequestAgreements } from './Agreements'
import { ComponentRequestAirplane } from './Airplane'
import { ComponentRequestDetails } from './Details'
import { ComponentRequestPayment } from './Payment'

@inject('screen')
@observer
export class ComponentRequest extends React.Component<{ screen?: Screen }> {
  render() {
    if (!this.props.screen) {
      throw new Error('screen store is undefined')
    }
    return (
      <div className='c-request'>
        {this.props.screen.request === RequestScreen.Agreements && (
          <ComponentRequestAgreements />
        )}
        {this.props.screen.request === RequestScreen.Airplane && (
          <ComponentRequestAirplane />
        )}
        {this.props.screen.request === RequestScreen.Details && (
          <ComponentRequestDetails />
        )}
        {this.props.screen.request === RequestScreen.Payment && (
          <ComponentRequestPayment />
        )}
      </div>
    )
  }
}
