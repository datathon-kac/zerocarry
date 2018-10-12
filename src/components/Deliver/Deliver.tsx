import * as React from 'react'
import { screen, GlobalScreen } from '../../store'
import { ComponentTop } from '../Top'
import { ComponentButtonIcon } from '../Button'

export class ComponentDeliver extends React.Component {
  addNewDeliver = () => {
    screen.setGlobalScreen(GlobalScreen.Add)
  }
  render() {
    return (
      <div className='c-deliver'>
        <ComponentTop
          label='Delievery'
          icon={['fal', 'truck']}
        />
        <ComponentButtonIcon
          icon={['fal', 'plus']}
          backgroundColor='#7200ff'
          label='Request Delivery'
          isActivated={true}
          isBottom={true}
          onClick={this.addNewDeliver}
        />
      </div>
    )
  }
}
