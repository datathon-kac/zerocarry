import axios from 'axios'
import * as React from 'react'
import { Register, screen, GlobalScreen, RegisterScreen, Screen } from '../../store'
import { inject, observer } from 'mobx-react'
import { ComponentTop } from '../Top'
import { ComponentButtonIcon } from '../Button'
import { ComponentRegisterCreditCardForm, ComponentRegisterLuggageForm } from './'

@inject('screen', 'register')
@observer
export class ComponentRegister extends React.Component<{ register?: Register, screen?: Screen }> {
  gotoLuggagePictureUploadScreen = () => {
    if (!this.props.screen) {
      throw new Error('screen store is undefined')
    }
    this.props.screen.setRegisterScreen(RegisterScreen.Luggage)
  }

  register = async () => {

    if (!this.props.register) {
      throw new Error('register store is undefined')
    }
    const { data: { id: userId } } = await axios.post('http://192.168.164.34:3000/api/users/', {
      firstName: 'tony',
      lastName: 'won',
      username: 'tonywon',
      password: 'fuckingdatathon',
      email: 'tony@erion.kr',
      passportCode: 'M12345678',
      contactNumber: '01012345678',
      luggagePictureUrl: this.props.register.luggagePictureUrl,
    })
    this.props.register.setUserId(userId)
    localStorage.setItem('user', JSON.stringify(this.props.register))
    screen.setGlobalScreen(GlobalScreen.Deliver)
  }

  render() {
    if (!this.props.screen) {
      throw new Error('screen store is undefined')
    }
    if (!this.props.register) {
      throw new Error('register store is undefined')
    }
    return (
      <div className='c-register'>
        {this.props.screen.register === RegisterScreen.CreditCard && (
          <>
            <ComponentTop label='Register<br/>Credit Card' icon={['fal', 'clipboard']} />
            <ComponentRegisterCreditCardForm />
            <ComponentButtonIcon
              icon={['fal', 'arrow-right']}
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
              onClick={this.gotoLuggagePictureUploadScreen}
            />
          </>
        )}
        {this.props.screen.register === RegisterScreen.Luggage && (
          <>
            <ComponentTop label='Register<br/>My Luggage' icon={['fal', 'suitcase']} />
            <ComponentRegisterLuggageForm />
            <ComponentButtonIcon
              icon={['fal', 'check']}
              backgroundColor='black'
              label='Complete Registration'
              isActivated={true}
              isBottom={true}
              onClick={this.register}
            />
          </>
        )}
      </div>
    )
  }
}
