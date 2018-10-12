import * as React from 'react'
import { Register, RegisterScreens, register } from '../../store'
import { observer } from 'mobx-react'
import ComponentTop from '../Top/Top'
import ComponentButtonIcon from '../Button/Icon'

@observer
class ComponentRegisterForm extends React.Component<{ register: Register }> {
  render() {
    return (
      <div className='c-register-form'>
        <div className='field'>
          <label className='label'>Name on card</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              placeholder='STEVE JOBS'
              value={this.props.register.nameOnCard}
              onChange={(e) => this.props.register.setNameOnCard(e.target.value)}
            />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Card Number</label>
          <div className='columns is-narrow'>
            <div className='column'>
              <div className='control'>
                <input className='input' type='text' placeholder='1234' />
              </div>
            </div>
            <div className='column'>
              <div className='control'>
                <input className='input' type='text' placeholder='5678' />
              </div>
            </div>
            <div className='column'>
              <div className='control'>
                <input className='input' type='text' placeholder='9012' />
              </div>
            </div>
            <div className='column'>
              <div className='control'>
                <input className='input' type='text' placeholder='3456' />
              </div>
            </div>
          </div>
        </div>
        <div className='columns is-narrow' style={{ marginBottom: '.75rem'}}>
          <div className='column'>
            <div className='field'>
              <label className='label'>Expiry Date</label>
              <div className='columns is-narrow'>
                <div className='column'>
                  <div className='control'>
                    <input className='input' type='text' placeholder='MM' />
                  </div>
                </div>
                <div className='column'>
                  <div className='control'>
                    <input className='input' type='text' placeholder='YYYY' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='column'>
            <div className='field'>
              <label className='label'>Security Code</label>
              <div className='control'>
                <input className='input' type='text' placeholder='123' />
              </div>
            </div>
          </div>
        </div>
        <div className='field'>
          <label className='label'>ZIP / Postal Code</label>
          <div className='control'>
            <input className='input' type='text' placeholder='12345' />
          </div>
        </div>
      </div>
    )
  }
}

@observer
export default class ComponentRegister extends React.Component<{ register: Register }> {
  render() {
    switch (this.props.register && this.props.register.screen) {
      case RegisterScreens.CreditCard:
        return (
          <div className='c-register'>
            <ComponentTop label='Register<br/>Credit Card' icon={['fal', 'clipboard']} />
            <ComponentRegisterForm register={register} />
            <ComponentButtonIcon
              icon={['fal', 'arrow-down']}
              backgroundColor='#aaa'
              label='Next'
              isActivated={true}
              onClick={() => window.alert(123)}
            />
          </div>
        )
      case RegisterScreens.Luggage:
        return (
          <div className='c-register'>
          </div>
        )
    }
  }
}
