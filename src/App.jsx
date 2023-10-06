import styled from "styled-components"
import StartGame from "./components/Homepage/StartGame";
import { useState } from "react";
import GamePlay from "./components/GamePlay/GamePlay";



function App() {

   const[isGameStarted,setisGameStarted]=useState(false);
   const toggleGamePlay=()=>{
    setisGameStarted((prev)=>!prev);
   }
  return (
  <>
  {
    isGameStarted?<GamePlay/>:<StartGame toggle={toggleGamePlay}/>
  }

  </>
  )
}

export default App
