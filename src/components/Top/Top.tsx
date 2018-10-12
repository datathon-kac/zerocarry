import * as React from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class ComponentTop extends React.Component<{ label: string, icon?: IconProp }, { isFixedVisible: boolean }> {
  state = {
    isFixedVisible: false,
  }

  onScroll(event: UIEvent) {
    /* tslint:disable no-console */
    console.log(event)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  render() {
    return (
      <div className='c-top'>
        <div className='c-top-in'>
          <div className='c-top-in__label' dangerouslySetInnerHTML={{ __html: this.props.label}}></div>
          {this.props.icon && (
            <div className='c-top-in__icon'>
              <FontAwesomeIcon icon={this.props.icon} />
            </div>
          )}
        </div>
        <div
          className='c-top-fixed'
          style={
            this.state.isFixedVisible
              ? {
                display: 'block',
              }
              : {}
            }
        >
          {this.props.label}
        </div>
      </div>
    )
  }
}
