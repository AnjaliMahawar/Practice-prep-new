import React, { useState } from 'react'

const Main = () => {
    const[data,setData]=useState()
  return (
    <div>
        {/* <input type='text'placeholder='Enter Your Name' name='name'></input> */}
{/* <input type='text' name='name' value={data} onChange={(e)=>{setData(e.target.value)}}/> */}

{/* testing for click event  */}
  {/* <button data-testid='btn1' onClick={()=>{setData("update data")}}>updateBtn</button> */}
  {/* {custom role testing} */}
  <button>btn1</button>
  <button>btn2</button>
  <div role='div'>helo</div>

  <h1>{data}</h1>

    </div>
  )
}

export default Main