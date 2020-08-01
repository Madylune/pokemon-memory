import React from 'react'
import styled from 'styled-components'
import PokemonGrid from './components/PokemonGrid'

const StyledApp = styled.div`
  text-align: center;
`

const StyledLogo = styled.img`
  height: 100px;
  margin-top: 10px;
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
