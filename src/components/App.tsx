import * as React from 'react'
import { observer } from 'mobx-react'
import { Screen, Screens, register } from '../store'
import { ComponentFirstTime } from './FirstTime'
import { ComponentRegister } from './Register'
import { ComponentDeliver } from './Deliver'
import { ComponentAdd } from './Add'

@observer
export default class ComponentApp extends React.Component<{ screen: Screen }> {
  render() {
    return (
      <div className='c-app'>
        {this.props.screen.now === Screens.FirstTime && (
          <ComponentFirstTime />
        )}
        {this.props.screen.now === Screens.Register && (
          <ComponentRegister register={register}/>
        )}
        {this.props.screen.now === Screens.Deliver && (
          <ComponentDeliver />
        )}
        {this.props.screen.now === Screens.Add && (
          <ComponentAdd />
        )}
      </div>
    )
  }
}
