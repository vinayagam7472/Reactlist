import { useEffect, useState } from "react";

function Infinite() {
  const [count,setcount]=useState(0)
useEffect(()=>{
  setcount(count+1)
},[count])

  return (
   <>
   <h1>{count}</h1>
   <button onClick={()=>count+1}>+</button>
   </>
  );
}
export default Infinite