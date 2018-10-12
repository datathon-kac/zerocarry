import * as React from 'react'
import { register, screen, GlobalScreen } from '../../store'
import { ComponentButtonIcon } from '../Button'
import LogoImage from './FirstTimeLogo.svg'
import BackgroundImage from './FirstTimeBackground.jpg'

export class ComponentFirstTime extends React.Component {
  signInOrRegister = () => {
    screen.setGlobalScreen(
      register.nameOnCard ? GlobalScreen.Deliver : GlobalScreen.Register,
    )
  }

  render() {
    return (
      <div className='c-first-time'>
        <div
          className='c-first-time__background'
          style={{ backgroundImage: `url(${BackgroundImage})`}}
        >
          <div className='c-first-time__dimmer'>
            <img src={LogoImage} />
            <div className='c-first-time__key-message'>
              We'll<br />
              send your<br />
              luggage<br />
              from airport<br />
              to your house
            </div>
            <ComponentButtonIcon
              icon={['fab', 'facebook-f']}
              backgroundColor='#007cff'
              label='Sign In with Facebook'
              isActivated={true}
              isBottom={true}
              onClick={this.signInOrRegister}
            />
          </div>
        </div>
      </div>
    )
  }
}
