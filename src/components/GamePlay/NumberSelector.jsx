import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({setError,error,selectedNumber,setSelectedNumber}) => {
    const arrayNumber=[1,2,3,4,5,6];
    const numberSelectorHandle=(value)=>{
      setSelectedNumber(value);
      setError("");
    }
    

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'end',marginTop:'50px'}}>

    <p style={{color:'red'}}>{error}</p>
    <div style={{display:'flex'}}>
        {arrayNumber.map((value,i)=>(
  <Box isSelected={
    value===selectedNumber
  } key={i} onClick={()=>numberSelectorHandle(value)}>{value}</Box>
 
        ))}
           
    </div><h3>Select Number</h3></div>
  )
}

export default NumberSelector
const Box=styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid #fff;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    margin: 20px;
    background-color: ${(props)=>(props.isSelected?"white":"black")};
    color: ${(props)=>(!props.isSelected?"white":"black")};
`