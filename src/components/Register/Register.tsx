import * as React from 'react'
import { Register, RegisterScreens, register } from '../../store'
import { observer } from 'mobx-react'
import { ComponentTop } from '../Top'
import { ComponentButtonIcon } from '../Button'
import { ComponentRegisterCreditCardForm, ComponentRegisterLuggageForm } from './'

@observer
export class ComponentRegister extends React.Component<{ register: Register }> {
  render() {
    switch (this.props.register && this.props.register.screen) {
      case RegisterScreens.CreditCard:
        return (
          <div className='c-register'>
            <ComponentTop label='Register<br/>Credit Card' icon={['fal', 'clipboard']} />
            <ComponentRegisterCreditCardForm register={this.props.register} />
            <ComponentButtonIcon
              icon={['fal', 'arrow-down']}
              backgroundColor='black'
              label='Next'
              isActivated={
                this.props.register.isNameOnCardValid &&
                this.props.register.isCardNumberValid &&
                this.props.register.isExpiryDateValid &&
                this.props.register.isSecurityCodeValid &&
                this.props.register.isZipValid
              }
              isBottom={true}
              onClick={() => this.props.register.screen = RegisterScreens.Luggage}
            />
          </div>
        )
      case RegisterScreens.Luggage:
        return (
          <div className='c-register'>
            <ComponentTop label='Register<br/>Luggage' icon={['fal', 'suitcase']} />
            <ComponentRegisterLuggageForm register={this.props.register} />
            <ComponentButtonIcon
              icon={['fal', 'check']}
              backgroundColor='black'
              label='Complete Registration'
              isActivated={this.props.register.isLuggagePictureUrlValid}
              isBottom={true}
              onClick={() => window.alert(123)}
            />
          </div>
        )
    }
  }
}
