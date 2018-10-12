import * as React from 'react'
import { observer } from 'mobx-react'
import { Screen, GlobalScreen, register } from '../store'
import { ComponentFirstTime } from './FirstTime'
import { ComponentRegister } from './Register'
import { ComponentDeliver } from './Deliver'
import { ComponentAdd } from './Add'

@observer
export default class ComponentApp extends React.Component<{ screen: Screen }> {
  render() {
    return (
      <div className='c-app'>
        {this.props.screen.global === GlobalScreen.FirstTime && (
          <ComponentFirstTime />
        )}
        {this.props.screen.global === GlobalScreen.Register && (
          <ComponentRegister register={register} screen={this.props.screen} />
        )}
        {this.props.screen.global === GlobalScreen.Deliver && (
          <ComponentDeliver />
        )}
        {this.props.screen.global === GlobalScreen.Add && (
          <ComponentAdd screen={this.props.screen} />
        )}
      </div>
    )
  }
}
