import React from 'react'
import WindowSize from './WindowSize'

const UseHoc = () => {
    const{ hight,
      width}=WindowSize()
      console.log("my new ",hight,width)
  return (
   <div>
        <h1>height={hight}</h1>
        <h2>width={width}</h2>
    </div>
  )
}

export default UseHoc