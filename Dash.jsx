import React, { useContext } from 'react'
import { Data } from './App'


function Dash() {
    const{name,setName}=useContext(Data)
  return (
   <h1>{name}</h1>
  )
}

export default Dash