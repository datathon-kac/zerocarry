import * as React from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class ComponentButtonIcon extends React.Component<{
  icon: IconProp,
  backgroundColor: string,
  label: string,
  isActivated: boolean,
  onClick: (...args: any[]) => any,
}> {
  render() {
    return (
      <div
        className={`c-button-icon${!this.props.isActivated ? ' c-button-icon_deactivated' : ''}`}
        style={{ backgroundColor: this.props.isActivated ? this.props.backgroundColor : undefined }}
        // onClick={() => screen.setScreen(Screens.Register)}
        onClick={() => this.props.isActivated && this.props.onClick()}
      >
        <div className='c-button-icon__icon'>
          <FontAwesomeIcon icon={this.props.icon} />
        </div>
        <div className='c-button-icon__label'>
          <span>{this.props.label}</span>
        </div>
      </div>
    )
  }
}
