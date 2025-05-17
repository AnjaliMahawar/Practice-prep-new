import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Redux/CounterSlice'

const UseRedux = () => {
    const counter=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch()
    console.log("counter",counter)
  return (
    <div>
       <h1>{counter}</h1>
        <button  onClick={() => dispatch(increment())}>increment</button>
        <button onClick={()=>{dispatch(decrement())}}>decrement</button> 
    </div>
  )
}

export default UseRedux