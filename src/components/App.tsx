import * as React from 'react'
import { observer, Provider } from 'mobx-react'
import { Screen, GlobalScreen, register, screen, add } from '../store'
import { ComponentFirstTime } from './FirstTime'
import { ComponentRegister } from './Register'
import { ComponentDeliver } from './Deliver'
import { ComponentAdd } from './Add'

@observer
export default class ComponentApp extends React.Component<{ screen: Screen }> {
  render() {
    return (
      <Provider screen={screen} register={register} add={add}>
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
          {this.props.screen.global === GlobalScreen.Add && (
            <ComponentAdd />
          )}
        </div>
      </Provider>
    )
  }
}
