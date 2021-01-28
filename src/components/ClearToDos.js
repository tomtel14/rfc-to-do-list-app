import React from 'react';

function ClearToDos({ clearToDos, todos }) {
  return (
    todos.length > 0 && <button className="clear btn" onClick={clearToDos}>Clear All</button>
  )
}

export default ClearToDos;
