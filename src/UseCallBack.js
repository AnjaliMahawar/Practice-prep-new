import React, { useCallback, useState } from 'react';

function Callback() {
  const [count, setCount] = useState(0);

  // Without useCallback, this function would change on every render.
  // const handleClick = useCallback(() => {
  //   setCount(count + 1);
  // }, [count]);

  const handleClick=()=>{
    console.log("call back")
    setCount(count + 1);
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default Callback