import * as React from 'react'
import { observer, Provider } from 'mobx-react'
import { Screen, GlobalScreen, register, screen, request } from '../store'
import { ComponentFirstTime } from './FirstTime'
import { ComponentRegister } from './Register'
import { ComponentDeliver } from './Deliver'
import { ComponentRequest } from './Request'

@observer
export default class ComponentApp extends React.Component<{ screen: Screen }> {
  render() {
    return (
      <Provider screen={screen} register={register} request={request}>
        <div className='c-app'>
          {this.props.screen.global === GlobalScreen.FirstTime && (
            <ComponentFirstTime />
          )}
          {this.props.screen.global === GlobalScreen.Register && (
            <ComponentRegister />
          )}
          {this.props.screen.global === GlobalScreen.Deliver && (
            <ComponentDeliver />
          )}
          {this.props.screen.global === GlobalScreen.Request && (
            <ComponentRequest />
          )}
        </div>
      </Provider>
    )
  }
}
