import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { Register } from '../../store'

@inject('register')
@observer
export class ComponentRegisterCreditCardForm extends React.Component<{ register?: Register }> {
  onNameOnCardChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const register = this.props.register as Register
    register.setNameOnCard(e.target.value)
  }
  onCardNumber1Changed = (e: React.ChangeEvent<HTMLInputElement>) => {
    const register = this.props.register as Register
    register.setCardNumber1(e.target.value)
  }
  onCardNumber2Changed = (e: React.ChangeEvent<HTMLInputElement>) => {
    const register = this.props.register as Register
    register.setCardNumber2(e.target.value)
  }
  onCardNumber3Changed = (e: React.ChangeEvent<HTMLInputElement>) => {
    const register = this.props.register as Register
    register.setCardNumber3(e.target.value)
  }
  onCardNumber4Changed = (e: React.ChangeEvent<HTMLInputElement>) => {
    const register = this.props.register as Register
    register.setCardNumber4(e.target.value)
  }
  onExpiryDateMonthChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const register = this.props.register as Register
    register.setExpiryDateMonth(e.target.value)
  }
  onExpiryDateYearChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const register = this.props.register as Register
    register.setExpiryDateYear(e.target.value)
  }
  onSecurityCodeChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const register = this.props.register as Register
    register.setSecurityCode(e.target.value)
  }
  onZipChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const register = this.props.register as Register
    register.setZip(e.target.value)
  }

  render() {
    if (this.props.register === undefined) {
      throw new Error('register store is undefined')
    }
    return (
      <div className='c-register-credit-card-form'>
        <div className='field'>
          <label className='label'>Name on card</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              placeholder='STEVE JOBS'
              value={this.props.register.nameOnCard}
              onChange={this.onNameOnCardChanged}
            />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Card Number</label>
          <div className='columns is-narrow'>
            <div className='column'>
              <div className='control'>
                <input
                  className='input'
                  type='text'
                  placeholder='1234'
                  value={this.props.register.cardNumber1}
                  onChange={this.onCardNumber1Changed}
                />
              </div>
            </div>
            <div className='column'>
              <div className='control'>
                <input
                  className='input'
                  type='text'
                  placeholder='5678'
                  value={this.props.register.cardNumber2}
                  onChange={this.onCardNumber2Changed}
                />
              </div>
            </div>
            <div className='column'>
              <div className='control'>
                <input
                  className='input'
                  type='text'
                  placeholder='9012'
                  value={this.props.register.cardNumber3}
                  onChange={this.onCardNumber3Changed}
                />
              </div>
            </div>
            <div className='column'>
              <div className='control'>
                <input
                  className='input'
                  type='text'
                  placeholder='3456'
                  value={this.props.register.cardNumber4}
                  onChange={this.onCardNumber4Changed}
                />
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
                    <input
                      className='input'
                      type='text'
                      placeholder='MM'
                      value={this.props.register.expiryDateMonth}
                      onChange={this.onExpiryDateMonthChanged}
                    />
                  </div>
                </div>
                <div className='column'>
                  <div className='control'>
                    <input
                      className='input'
                      type='text'
                      placeholder='YYYY'
                      value={this.props.register.expiryDateYear}
                      onChange={this.onExpiryDateYearChanged}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='column'>
            <div className='field'>
              <label className='label'>Security Code</label>
              <div className='control'>
                <input
                  className='input'
                  type='text'
                  placeholder='123'
                  value={this.props.register.securityCode}
                  onChange={this.onSecurityCodeChanged}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='field'>
          <label className='label'>ZIP / Postal Code</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              placeholder='12345'
              value={this.props.register.zip}
              onChange={this.onZipChanged}
            />
          </div>
        </div>
      </div>
    )
  }
}
