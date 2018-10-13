import * as React from 'react'
import { screen, AddScreen } from '../../store'
import { ComponentTopApp } from '../Top/Add'
import { ComponentButtonIcon } from '../Button'

export class ComponentAddAgreements extends React.Component {
  gotoNextPage = () => {
    screen.setAddScreen(AddScreen.Airplane)
  }

  render() {
    return (
      <div className='c-add-agreements'>
        <ComponentTopApp
          label='Agreements'
        />
        <div className='c-add-agreements__text'>
          <p>Fusce lobortis metus felis, eget egestas dolor sodales at. Donec eget diam porta, suscipit erat in, hendrerit odio. Aenean at nisi vel nisi feugiat condimentum. Ut at dolor elementum, iaculis ante in, pharetra nibh. Vestibulum vitae arcu erat. Nulla facilisi. Etiam ex nunc, sagittis non erat eu, scelerisque auctor felis. Sed nec feugiat nisl, a dictum massa. Cras urna urna, consequat sed lorem et, pulvinar iaculis risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          <p>Pellentesque at mi elit. Maecenas ut ligula non odio auctor sodales. Morbi sodales placerat metus sit amet mollis. Nullam sapien lacus, consectetur vitae eleifend id, imperdiet ut justo. Proin a feugiat urna. Sed magna augue, sollicitudin aliquam nunc at, faucibus facilisis libero. Nam at nulla nec nisi mattis blandit. Mauris semper nulla quis accumsan finibus. Nulla et rutrum neque.</p>
          <p>Proin iaculis nibh et est rutrum, ultricies ultricies quam pharetra. Suspendisse sed bibendum massa. Suspendisse aliquet, purus vel lobortis condimentum, est orci faucibus lacus, eu tempor arcu purus vitae turpis. Duis tristique commodo risus, a convallis dolor consectetur id. Cras neque felis, ultrices vitae lacus lobortis, viverra iaculis urna. Curabitur pretium id purus eget dapibus. Proin quis posuere mi. In volutpat diam eget sapien sagittis molestie. Quisque sagittis tortor et arcu suscipit rhoncus. Ut odio elit, vestibulum sed blandit eu, semper non eros. Morbi posuere pulvinar est, id scelerisque neque placerat ac. Integer ullamcorper orci non nisi aliquet tempor.</p>
        </div>
        <ComponentButtonIcon
          icon={['fal', 'check']}
          backgroundColor='#7200ff'
          label='I Agree'
          isActivated={true}
          isBottom={true}
          onClick={this.gotoNextPage}
        />
      </div>
    )
  }
}
