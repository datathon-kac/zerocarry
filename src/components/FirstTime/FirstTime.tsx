import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { screen, Screens } from '../../store'
import ComponentButtonIcon from '../Button/Icon'
import LogoImage from './FirstTimeLogo.svg'
import BackgroundImage from './FirstTimeBackground.jpg'

export default class ComponentFirstTime extends React.Component {
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
              onClick={() => screen.setScreen(Screens.Register)}
            />
          </div>
        </div>
      </div>
    )
  }
}
