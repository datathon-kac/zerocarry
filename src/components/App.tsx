import * as React from 'react'
import { observer } from 'mobx-react'
import { Screen, Screens, register } from '../store'
import { ComponentFirstTime } from './FirstTime'
import { ComponentRegister } from './Register'
import { ComponentLuggages } from './Luggages'
import { ComponentAdd } from './Add'

@observer
export default class ComponentApp extends React.Component<{ screen: Screen }> {
  render() {
    switch (this.props.screen.now) {
      case Screens.FirstTime:
        return (
          <div className='c-app'>
            <ComponentFirstTime />
          </div>
        )
      case Screens.Register:
        return (
          <div className='c-app'>
            <ComponentRegister register={register}/>
          </div>
        )
      case Screens.Luggages:
        return (
          <div className='c-app'>
            <ComponentLuggages />
          </div>
        )
      case Screens.Add:
        return (
          <div className='c-app'>
            <ComponentAdd />
          </div>
        )
    }
  }
}
