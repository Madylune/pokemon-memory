import React from 'react'
import styled from 'styled-components'

const StyledGameOver = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.8);
`

const StyledContent = styled.div`
  margin-top: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledButton = styled.div`
  padding: 20px;
  border-radius: 60px;
  border: 3px solid #264aaf;
  background-color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #ececec;
  }
`

const StyledImg = styled.img`
  height: 70px;
`

const GameOver = () => {
  return (
    <StyledGameOver>
      <StyledContent>
        <StyledButton onClick={() => document.location.reload(true)}>
          <StyledImg src={require(`../assets/Play-Again.png`)} alt="Play Again" />
        </StyledButton>
      </StyledContent>
    </StyledGameOver>
  )
}

export default GameOver