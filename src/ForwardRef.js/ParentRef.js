import React, { useRef } from 'react'
import Child from './Child'
//In React, a forward ref is a technique that allows a parent component to pass a ref down to one of 
//its child components. 
const ParentRef = () => {
    let inputRef=useRef(null)
   const updateRefFun=()=>{
    inputRef.current.value='1000'
    inputRef.current.style.color='red'
    inputRef.current.focus()
   }
  return (
    <div>
        <h1>forwardRef in React</h1>
        <Child ref={inputRef}/>
        <button onClick={updateRefFun}>updateInputButton</button>
    </div>
  )
}

export default ParentRef