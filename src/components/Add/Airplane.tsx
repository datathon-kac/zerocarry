import * as React from 'react'
import { ComponentTopApp } from '../Top/Add'
import { ComponentAddProgress } from './Progress'
import { ComponentButtonIcon } from '../Button'
import { screen, AddScreen } from '../../store'

export default class ComponentAddAirplane extends React.Component {
  render() {
    return (
      <div className='c-add-airplane'>
        <ComponentTopApp
          label='Add Luggage'
        />
        <ComponentAddProgress progressNum={1} />
        <ComponentButtonIcon
          icon={['fal', 'arrow-down']}
          label='Next Step'
          isActivated={true}
          backgroundColor='#7200ff'
          isBottom={true}
          onClick={() => screen.setAddScreen(AddScreen.Details)}
        />
      </div>
    )
  }
}
