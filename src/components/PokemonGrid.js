import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import map from 'lodash/fp/map'
import includes from 'lodash/fp/includes'
import size from 'lodash/fp/size'
import uniqBy from 'lodash//fp/uniqBy'
import flow from 'lodash/fp/flow'
import isEmpty from 'lodash/fp/isEmpty'
import find from 'lodash/fp/find'
import { POKEMON_LIST } from '../api'
import { shuffleCards } from '../utils'

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px 50px;
  margin: auto;
  width: 70%;
`

const StyledCard = styled.div`
  position: relative;
  box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.35);
  border-radius: 10px;
  height: 150px;
  width: 150px;
  margin: 10px;
  cursor: pointer;
`

const StyledImg = styled.img`
  height: 100%;
  background-color: white;
`

const cards = shuffleCards(POKEMON_LIST)

const PokemonGrid = () => {
  const [ flippedCard, setFlipCard ] = useState([])
  const [ pairs, setPairs ] = useState([])

  const flipCard = useCallback(
    card => 
      size(flippedCard) < 2
        ? setFlipCard([ ...flippedCard, card ])
        : setFlipCard([ card ])
    
  )

  useEffect(() => {
    if (size(flippedCard) === 2 && size(uniqBy('name')) === 1) {
      const isPair = flow(
        uniqBy('name'),
        cards => size(cards) === 1
      )(flippedCard)

      if (isPair) {
        isEmpty(pairs) 
          ? setPairs(flippedCard) 
          : setPairs([ ...flippedCard, ...pairs ])
      }
    }
  }, [flippedCard])
  
  size(cards) === size(pairs) && console.log("Gagné !")

  return (
    <StyledGrid>
      {map(pokemon => 
          <StyledCard key={pokemon.id} onClick={() => flipCard(pokemon)} flip={includes(pokemon.id, flippedCard)}>
            {includes(pokemon, flippedCard) || find({ id: pokemon.id }, pairs)
              ? <StyledImg src={require(`../assets/${pokemon.picture}`)} alt={pokemon.name} />
              : <StyledImg src={require(`../assets/pokeball.svg`)} alt="Pokeball" />
            }
          </StyledCard>
      , cards)}
    </StyledGrid>
  )
}

export default PokemonGrid