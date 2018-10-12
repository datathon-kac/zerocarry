import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import App from './components/App'
import { screen } from './store'

library.add(fal)
library.add(fab)

ReactDOM.render(
  <App screen={screen} />,
  document.getElementById('app'),
)
