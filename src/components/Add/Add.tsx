import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Screen, AddScreen } from '../../store'
import { ComponentAddAgreements } from './Agreements'
import ComponentAddAirplane from './Airplane'
import ComponentAddDetails from './Details'
import ComponentAddPayment from './Payment'

@inject('screen')
@observer
export class ComponentAdd extends React.Component<{ screen?: Screen }> {
  render() {
    if (!this.props.screen) {
      throw new Error('screen store is undefined')
    }
    return (
      <div className='c-add'>
        {this.props.screen.add === AddScreen.Agreements && (
          <ComponentAddAgreements />
        )}
        {this.props.screen.add === AddScreen.Airplane && (
          <ComponentAddAirplane />
        )}
        {this.props.screen.add === AddScreen.Details && (
          <ComponentAddDetails />
        )}
        {this.props.screen.add === AddScreen.Payment && (
          <ComponentAddPayment />
        )}
      </div>
    )
  }
}
