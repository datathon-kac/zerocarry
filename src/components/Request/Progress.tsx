import * as React from 'react'

export class ComponentRequestProgress extends React.Component<{ progressNum?: number }> {
  render() {
    return (
      <div className={`c-request-progress ${this.props.progressNum ? `is-${this.props.progressNum}` : ''}`}>
        <div className='c-request-progress__bar'></div>
        <div className='c-request-progress__active-bar'></div>
        <div className='c-request-progress__progresses'>
          <div className='c-request-progress__progress'>
            <div className='c-request-progress__dot-container'>
              <div className='c-request-progress__space' />
              <div className='c-request-progress__dot' />
              <div className='c-request-progress__space' />
            </div>
            <div className='c-request-progress__label'>AIRPLANE</div>
          </div>
          <div className='c-request-progress__space' />
          <div className='c-request-progress__progress'>
            <div className='c-request-progress__dot-container'>
              <div className='c-request-progress__space' />
              <div className='c-request-progress__dot' />
              <div className='c-request-progress__space' />
            </div>
            <div className='c-request-progress__label'>DETAILS</div>
          </div>
          <div className='c-request-progress__space' />
          <div className='c-request-progress__progress'>
            <div className='c-request-progress__dot-container'>
              <div className='c-request-progress__space' />
              <div className='c-request-progress__dot' />
              <div className='c-request-progress__space' />
            </div>
            <div className='c-request-progress__label'>PAYMENT</div>
          </div>
        </div>
      </div>
    )
  }
}
