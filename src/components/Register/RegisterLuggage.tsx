import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { observer } from 'mobx-react'
import { Register } from '../../store'
import { ComponentButtonIcon } from '../Button'

@observer
export class ComponentRegisterLuggageForm extends React.Component<{ register: Register }> {
  render() {
    return (
      <div className='c-register-luggage-form'>
        <div className='c-register-luggage-form__image'>
          {!this.props.register.isLuggagePictureUrlValid && (
            <div className='c-register-luggage-form__empty'>
              <FontAwesomeIcon icon={['fal', 'sad-tear']} />
              <label>There's no luggage picture</label>
            </div>
          )}
        </div>
        <div className='c-register-luggage-form__buttons'>
          <ComponentButtonIcon
            icon={['fal', 'cloud-upload']}
            backgroundColor='#ffe314'
            label='Upload a new picture'
            isActivated={true}
            isBottom={false}
            onClick={() => window.alert('123')}
          />
        </div>
      </div>
    )
  }
}
