
import React, { useState } from 'react'

const Child = (prop) => {
    const {data,data2,dataFromChild}=prop
    const [inputValue, setInputValue] = useState('anju from child');
    const sendData = () => {
        // Call the parent's callback function with the data to pass it to the parent component
        dataFromChild(inputValue);
      };
    
  return (
    <div>
      <h1>child compo {data}</h1>
      <h4>{data2}</h4>
      <button onClick={sendData}>Click ME</button>
    </div>
  )
}

export default Child
