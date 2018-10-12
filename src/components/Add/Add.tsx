import * as React from 'react'
import { ComponentTopApp } from '../Top/Add'
import { Screen } from '../../store'

export class ComponentAdd extends React.Component<{ screen: Screen }> {
  render() {
    return (
      <div className='c-add'>
        <ComponentTopApp
          label='Agreements'
        />
      </div>
    )
  }
}
