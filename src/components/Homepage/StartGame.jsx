import React from 'react'
import styled from 'styled-components'

const StartGame = (
    {toggle}) => {
  return (
    <Container>
        <div> <img src='/images/dices.png'/></div>
       
<div className='content'>
    <h1>DiceGame</h1>
<Button onClick={toggle}>
    Play Now
</Button>
</div>
    </Container>
  )
}

export default StartGame;

const Container =styled.div`
max-width: 1180px;
color: white;
display: flex;
margin: 0 auto;
align-items: center;
height: 100vh;

.content {
  h1{
    font-size:96px;
    white-space: nowrap;
    font-weight:300 ;
  }
}


`
const Button=styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 18px;
    gap: 10px;
    width: 220px;
    height: 44px;
    background-color: #fff;
    color: black;
    border-radius: 5px;
    font-size: 16px;
    transition: 0.1s background ease-in;


    &:hover{
        background-color: #ffffff3c;
        color: #fff;
        border: 1px solid #fff;
        transition: 0.1s background ease-in;

    }
`