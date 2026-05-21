import React, { useState } from 'react'

function ToDo() {
  const [store,setStore]=useState("")
  const [add,setAdd]=useState([])

  function value(e){
    setStore(e.target.value)
  }
  function include(){
    setAdd(store)
  }
  return (
    <>

    <h1>{store}</h1>
    <p>{add}</p>
    <input type="text" onChange={value} />
    <button onClick={include}>add</button>
    
    </>
  )
}

export default ToDo