import * as React from 'react'
import { ComponentTopApp } from '../Top/Add'

export class ComponentAdd extends React.Component {
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
