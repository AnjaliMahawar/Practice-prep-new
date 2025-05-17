import React from 'react'
import {  useParams } from 'react-router-dom';
const Dynamic2 = () => {
    const {id}=useParams()
    console.log("params",id)
  return (
    <div>Dynamic2</div>
  )
}

export default Dynamic2