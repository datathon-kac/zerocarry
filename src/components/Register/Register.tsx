import axios from 'axios'
import * as React from 'react'
import { Register, screen, GlobalScreen, RegisterScreen, Screen } from '../../store'
import { observer } from 'mobx-react'
import { ComponentTop } from '../Top'
import { ComponentButtonIcon } from '../Button'
import { ComponentRegisterCreditCardForm, ComponentRegisterLuggageForm } from './'

@observer
export class ComponentRegister extends React.Component<{ register: Register, screen: Screen }> {
  gotoLuggagePictureUploadScreen = () => {
    this.props.screen.setRegisterScreen(RegisterScreen.Luggage)
  }

  register = async () => {
    localStorage.setItem('user', JSON.stringify(this.props.register))
    await axios.post('http://192.168.164.34:3000/api/users/', {
      firstName: 'tony',
      lastName: 'won',
      username: 'tonywon',
      password: 'fuckingdatathon',
      email: 'tony@erion.kr',
      passportCode: 'M12345678',
      contactNumber: '01036319283',
      luggagePictureUrl: this.props.register.luggagePictureUrl,
    })
    screen.setGlobalScreen(GlobalScreen.Deliver)
  }

  render() {
    return (
      <div className='c-register'>
        {this.props.screen.register === RegisterScreen.CreditCard && (
          <>
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
              onClick={this.gotoLuggagePictureUploadScreen}
            />
          </>
        )}
        {this.props.screen.register === RegisterScreen.Luggage && (
          <>
            <ComponentTop label='Register<br/>My Luggage' icon={['fal', 'suitcase']} />
            <ComponentRegisterLuggageForm register={this.props.register} />
            <ComponentButtonIcon
              icon={['fal', 'check']}
              backgroundColor='black'
              label='Complete Registration'
              isActivated={this.props.register.isLuggagePictureUrlValid}
              // isActivated={true}
              isBottom={true}
              onClick={this.register}
            />
          </>
        )}
      </div>
    )
  }
}
