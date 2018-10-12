import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import axios from 'axios'
import { observer } from 'mobx-react'
import { Register } from '../../store'
import { getFile, uploadFileToS3Directly } from '../../utils'
import { ComponentButtonIcon } from '../Button'

@observer
export class ComponentRegisterLuggageForm extends React.Component<{ register: Register }> {
  async upload() {
    const file = await getFile('image/jpg, image/png')
    // const { url, fields } = (
    //   await axios.get(`http://192.168.164.34:3000/api/presignedurl/${file.name}`)
    // ).data
    // fields.file = file
    // const result = await axios.post(
    //   url,
    //   fields,
    // )
  }

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
            onClick={() => this.upload()}
          />
        </div>
      </div>
    )
  }
}
