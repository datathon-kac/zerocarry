import * as React from 'react'
import { screen, GlobalScreen, Register } from '../../store'
import { ComponentTop } from '../Top'
import { ComponentButtonIcon } from '../Button'
import { observer, inject } from 'mobx-react'
import axios from 'axios'

@inject('register')
@observer
export class ComponentDeliverCard extends React.Component<{ register?: Register, deliver: any }> {
  render() {
    if (!this.props.register) { return }
    return (
      <div className='c-deliver-card'>
        <div className='c-deliver-card__thumbnail' style={{ backgroundImage: `url('${this.props.register.luggagePictureUrl}')`}}/>
        <div className='c-deliver-card__details'>
          <div className='c-deliver-card-item'>
            <div className='c-deliver-card-item__title'>
              FLIGHT
            </div>
            <div className='c-deliver-card-item__body'>
              {this.props.deliver.flightCode}
            </div>
          </div>
          <div className='c-deliver-card-item'>
            <div className='c-deliver-card-item__title'>
              DELIVERED TO
            </div>
            <div className='c-deliver-card-item__body'>
              {this.props.deliver.destinationAddress}
            </div>
          </div>
          <div className={`c-deliver-progress is-${this.props.deliver.deliverStat}`}>
            <div className='c-deliver-progress__bar'></div>
            <div className='c-deliver-progress__active-bar'></div>
            <div className='c-deliver-progress__progresses'>
              <div className='c-deliver-progress__progress'>
                <div className='c-deliver-progress__dot-container'>
                  <div className='c-deliver-progress__space' />
                  <div className='c-deliver-progress__dot' />
                  <div className='c-deliver-progress__space' />
                </div>
                <div className='c-deliver-progress__label'>AIRPORT</div>
              </div>
              <div className='c-deliver-progress__space' />
              <div className='c-deliver-progress__progress'>
                <div className='c-deliver-progress__dot-container'>
                  <div className='c-deliver-progress__space' />
                  <div className='c-deliver-progress__dot' />
                  <div className='c-deliver-progress__space' />
                </div>
                <div className='c-deliver-progress__label'>DELIVERING</div>
              </div>
              <div className='c-deliver-progress__space' />
              <div className='c-deliver-progress__progress'>
                <div className='c-deliver-progress__dot-container'>
                  <div className='c-deliver-progress__space' />
                  <div className='c-deliver-progress__dot' />
                  <div className='c-deliver-progress__space' />
                </div>
                <div className='c-deliver-progress__label'>DELIVERED</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export class ComponentDeliver extends React.Component<{}, { delivers: any[] }> {
  state = {
    delivers: [],
  }

  addNewDeliver = () => {
    screen.setGlobalScreen(GlobalScreen.Request)
  }

  async componentDidMount() {
    const { data: delivers } = await axios.get('http://192.168.164.34:3000/api/delivers')
    this.setState({ delivers })
  }
  render() {
    return (
      <div className='c-deliver'>
        <ComponentTop
          label='Delivery'
          icon={['fal', 'truck']}
        />
        <div className='c-deliver__card-container'>
          {this.state.delivers.map((deliver: any) => (
            <ComponentDeliverCard
              key={deliver.deliverId}
              deliver={deliver}
            />
          ))}
        </div>
        <ComponentButtonIcon
          icon={['fal', 'plus']}
          backgroundColor='#7200ff'
          label='Request Delivery'
          isActivated={this.state.delivers.length === 0}
          isBottom={true}
          onClick={this.addNewDeliver}
        />
      </div>
    )
  }
}
