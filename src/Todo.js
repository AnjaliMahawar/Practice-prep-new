import React, { memo } from 'react'


function Todo({todo}) {
    console.log("todo",todo)
  return (
    <div>
        <>
      <h2>My Todos</h2>
      {todo?.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
    </div>
  )
}

export default memo(Todo);