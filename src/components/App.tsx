import * as React from 'react'
import styled from 'styled-components'

const Header = styled.h1`
  color: #aaa;
`

export default class App extends React.Component {
  render() {
    return <Header>hello, world</Header>
  }
}
