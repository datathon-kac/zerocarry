import * as React from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { screen, GlobalScreen, request, RequestScreen } from '../../store'

export class ComponentTopRequest extends React.Component<{ label: string, icon?: IconProp }, { isFixedVisible: boolean }> {
  state = {
    isFixedVisible: false,
  }

  onScroll(event: UIEvent) {
    /* tslint:disable no-console */
    console.log(event)
  }

  close = () => {
    request.init()
    screen.setGlobalScreen(GlobalScreen.Deliver)
    screen.setRequestScreen(RequestScreen.Agreements)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  render() {
    return (
      <div className='c-top-request'>
        <div className='c-top-request-in'>
          <div className='c-top-request-in__close' onClick={this.close}>
            <FontAwesomeIcon icon={['fal', 'times']} />
          </div>
          <div className='c-top-request-in__label' dangerouslySetInnerHTML={{ __html: this.props.label}}></div>
          {this.props.icon && (
            <div className='c-top-request-in__icon'>
              <FontAwesomeIcon icon={this.props.icon} />
            </div>
          )}
        </div>
        <div
          className='c-top-request-fixed'
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
