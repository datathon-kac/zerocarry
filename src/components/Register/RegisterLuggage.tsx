import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import axios from 'axios'
import { observer, inject } from 'mobx-react'
import { Register } from '../../store'
import { getFile, uploadFileToS3Directly } from '../../utils'
import { ComponentButtonIcon } from '../Button'

@inject('register')
@observer
export class ComponentRegisterLuggageForm extends React.Component<{ register?: Register }> {
  upload = async () => {
    if (!this.props.register) {
      throw new Error('register store is undefined')
    }
    const file = await getFile('image/jpg, image/png')
    const { presignedURL } = (
      await axios.get(`http://192.168.164.34:3000/api/presignedurl/${file.name}`)
    ).data
    await uploadFileToS3Directly(presignedURL, file)
    this.props.register.setLuggagePictureUrl(`https://zero-carry.s3.ap-southeast-1.amazonaws.com/${file.name}`)
  }

  render() {
    if (!this.props.register) {
      throw new Error('register store is undefined')
    }
    return (
      <div className='c-register-luggage-form'>
        <div className='c-register-luggage-form__image' style={{ backgroundImage: `url('${this.props.register && this.props.register.luggagePictureUrl}')`}}>
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
            onClick={this.upload}
          />
        </div>
      </div>
    )
  }
}
