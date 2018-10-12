import * as React from 'react'
import { ComponentTop } from '../Top'
import { ComponentButtonIcon } from '../Button'

export class ComponentDeliver extends React.Component {
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
          onClick={() => {}}
        />
      </div>
    )
  }
}
