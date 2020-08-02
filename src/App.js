import React from 'react'
import styled from 'styled-components'
import PokemonGrid from './components/PokemonGrid'
import { BREAKPOINTS } from './theme'

const StyledApp = styled.div`
  text-align: center;
  position: relative;
`

const StyledLogo = styled.img`
  height: 100px;
  margin-top: 10px;

  @media (max-width: ${BREAKPOINTS.md}) {
    height: 60px;
  }
`

const App = () => {
  return (
    <StyledApp>
      <StyledLogo src={require('./assets/logo.png')} alt="Logo Pokemon Memery" />
      <PokemonGrid />
    </StyledApp>
  )
}

export default App
