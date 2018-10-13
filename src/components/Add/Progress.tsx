import * as React from 'react'

export class ComponentAddProgress extends React.Component<{ progressNum?: number }> {
  render() {
    return (
      <div className={`c-add-progress ${this.props.progressNum ? `is-${this.props.progressNum}` : ''}`}>
        <div className='c-add-progress__bar'></div>
        <div className='c-add-progress__active-bar'></div>
        <div className='c-add-progress__progresses'>
          <div className='c-add-progress__progress'>
            <div className='c-add-progress__dot-container'>
              <div className='c-add-progress__space' />
              <div className='c-add-progress__dot' />
              <div className='c-add-progress__space' />
            </div>
            <div className='c-add-progress__label'>AIRPLANE</div>
          </div>
          <div className='c-add-progress__space' />
          <div className='c-add-progress__progress'>
            <div className='c-add-progress__dot-container'>
              <div className='c-add-progress__space' />
              <div className='c-add-progress__dot' />
              <div className='c-add-progress__space' />
            </div>
            <div className='c-add-progress__label'>DETAILS</div>
          </div>
          <div className='c-add-progress__space' />
          <div className='c-add-progress__progress'>
            <div className='c-add-progress__dot-container'>
              <div className='c-add-progress__space' />
              <div className='c-add-progress__dot' />
              <div className='c-add-progress__space' />
            </div>
            <div className='c-add-progress__label'>PAYMENT</div>
          </div>
        </div>
      </div>
    )
  }
}
