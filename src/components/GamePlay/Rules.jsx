import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <div>
        <RulesContainer>
           <h1 style={{fontWeight:'300'}}>Rules of the Game!</h1>
           <p>
            <ol>
                <li><p className='lists'>Select any number</p></li>
                 <li><p className='lists'>Click on dice</p></li>
                  <li><p className='lists'>If selected number is equal to dice number score is added by the dice number else score is detucted by 2</p></li>
            </ol>
           </p>
        </RulesContainer>
    </div>
  )
}

export default Rules;
const RulesContainer=styled.div`
    height: 200px;
    width: 700px;
    margin:0 auto;
    margin-top: 50px;
    margin-bottom: 50px;
    background-color: #7171ed;
    border: 1px solid #fff;
    padding: 30px;
    align-items: center;
    .lists{
        font-size: 16px;
        margin: 20px;
    }
`