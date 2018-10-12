import * as React from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ComponentButtonIconProps {
  icon: IconProp
  backgroundColor: string
  label: string
  isActivated: boolean
  isBottom: boolean
  onClick: (...args: any[]) => any
}

interface ComponentButtonIconState {
  className: string
}

export class ComponentButtonIcon extends React.Component<ComponentButtonIconProps, ComponentButtonIconState> {
  onClick = () => {
    if (this.props.isActivated) {
      this.props.onClick()
    }
  }

  render() {
    return (
      <div
        className={`c-button-icon ${!this.props.isActivated ? 'is-deactivated' : ''} ${this.props.isBottom ? 'is-bottom' : ''}`}
        style={{ backgroundColor: this.props.isActivated ? this.props.backgroundColor : undefined }}
        // onClick={() => screen.setScreen(Screens.Register)}
        onClick={this.onClick}
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
