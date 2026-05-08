import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Data } from "./App";


function About() {
  const {name,setName}=useContext(Data)
  const navigate=useNavigate()
  function move(){
    navigate("/")
  }
  return (
    <>
    <h1>{name}</h1>
    <h1>About </h1>
    <button onClick={move}> go to Home</button>
    </>
  )
}

export default About;