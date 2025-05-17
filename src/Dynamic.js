import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Dynamic = () => {
    const names=['ram','shyam','leo']
    const navigate=useNavigate()
  return (
    <div>
        <Link to="/dy/mohan">mohan</Link>
        <ul>
       
        {names.map((cv,id)=>{
            return <li onClick={()=>{navigate(`/dy/${cv}`)}}>{cv}</li>
        })}
        </ul>
    </div>
  )
}

export default Dynamic