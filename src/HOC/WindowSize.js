import React, { useEffect, useState } from 'react'

const WindowSize = () => {
 const[width,setWidth]=useState(window.innerWidth)
 const[hight,setHight]=useState(window.innerHeight)

 console.log("height",hight,"width",width)
 useEffect(()=>{
    const sizeTracker=()=>{
     setHight(window.innerHeight)
     setWidth(window.innerWidth)
    }
  window.addEventListener('resize',sizeTracker)
  return ()=>{
    window.removeEventListener('resize',sizeTracker)
  }
 },[])
  return (
    hight,
    width
    // <div>
    //     <h1>height={hight}</h1>
    //     <h2>width={width}</h2>
    // </div>
  )
}

export default WindowSize