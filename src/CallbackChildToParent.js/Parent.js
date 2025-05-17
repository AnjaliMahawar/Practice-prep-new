 import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [data,setData]=useState('data FRom Parent')
    const [dataFromChild,setDataFromChild]=useState()
    const dataFRomChildFun=(data)=>{
        console.log("dataa",data)

    }
  return (
    <div>
       <h1>parent compo</h1>
       <Child data={data} data2={'hello data 2'} dataFromChild={dataFRomChildFun}/>
    </div>
  )
}

export default Parent
