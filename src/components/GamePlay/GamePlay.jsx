import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { useState } from 'react'
import Rules from './Rules'
const GamePlay = () => {
  const [score,setScore]=useState(0);
  const  [currentdice,setCurrentdice]=useState(1);
  const [selectedNumber,setSelectedNumber]=useState();
  const[error,setError]=useState("");
  const[showRules,setShowRules]=useState(false);
   const generateRandomNumber= (min,max)=>{
     return Math.floor(Math.random()*(max-min)+min);
    }
    const rollDice=()=>{
        const randomNo=generateRandomNumber(1,7);
        setCurrentdice((prev)=>randomNo);
        if(!selectedNumber){
          setError("You did not select a number");
          return;

        }

        if(selectedNumber===randomNo){
          setScore((prev)=>prev+randomNo)
        }else{
           setScore((prev)=>prev-2)
        }
    }
    const setzero=()=>{
      setScore((prev)=>0)
    }
   
  return (
   <MainContainer>
    <div className="topsection">
    <TotalScore score={score}/>
    <NumberSelector error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} setError={setError}/></div>
    <RollDice currentdice={currentdice} rollDice={rollDice}/>
    <div className="btns">
      <OutlinedButton onClick={setzero}>
        Reset
      </OutlinedButton>
      <Button onClick={()=> setShowRules((prev)=>!prev)} >
        {showRules?"Hide ":"Show " }Rules
      </Button>
    </div>
    <div>
  {showRules &&<Rules/>}    
    </div>
    
   </MainContainer>
  )
}

export default GamePlay
const MainContainer=styled.main`
    .topsection{
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .btns{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
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
const OutlinedButton=styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 18px;
    gap: 10px;
    width: 220px;
    height: 44px;
    background-color: black;
    color: white;
    border-radius: 5px;
    font-size: 16px;
    border: 1px solid #fff;
    transition: 0.1s background ease-in;


    &:hover{
        background-color: #ffffff;
        color: #000;
        border: 1px solid #fff;
        transition: 0.1s background ease-in;

    }
`