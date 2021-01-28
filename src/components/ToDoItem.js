import React from 'react';

function ToDoItem({ todo, toggleComplete, delToDo }) {
  return (
    <div className="todo">
      <p>
        <input type="checkbox" onChange={() => toggleComplete(todo.id)} />
        <span className={todo.completed ? 'span-complete' : null}>{todo.title}</span>
        <button onClick={() => delToDo(todo.id)}>X</button>
      </p>
    </div>
  )
}

export default ToDoItem;
