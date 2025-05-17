import React, { useEffect, useState } from 'react'
import useUpdateEffect from './UseUpdateHook'

const App = () => {
    const[count,setCount]=useState(0)
    const[count2,setCount2]=useState(0)
    useUpdateEffect(()=>{
       console.log("ok update")
       
    },[count2])
    useEffect(()=>{
        console.log("ok ")
        setCount(count+1)
     },[count2])
     
  return (
    <div>
    <p>Count: {count}  count2: {count2}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount2(count2 + 1)}>Increment2</button>

  </div>
  )
}

export default App