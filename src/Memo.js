import React, { useState } from 'react'
import Todo from './Todo';

function Memo() {
    const [todos, setTodos] = useState(["todo 1", "todo 2"]);
    const [count, setCount] = useState(0);
    console.log("ok")
    const increment = () => {
        setCount((c) => c + 1);
      };
  return (
    <div>
        <h1>memo file</h1>
        <Todo todo={todos} />
        <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}

export default Memo