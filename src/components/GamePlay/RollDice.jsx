import React, { useState } from 'react'
import styled from 'styled-components'

const RollDice = (
    {rollDice,currentdice}
) => {
    
   
  return (
    <DiceContainer>
     <div>
        <img src={`/images/dice/dice_${currentdice}.png`}alt="dice1" className='dice' onClick={rollDice}/>
     </div>
     <p>Click on dice to Roll</p>
    </DiceContainer>
  )
}

export default RollDice
const DiceContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
    a{
        font-size: 24px;
    }
    .dice{
        cursor: pointer;
        width:200px;
        height: auto;
    }
`