import React from 'react';
import ToDoItem from './ToDoItem';

function ToDos({ todos, toggleComplete, delToDo }) {
  return (
    <div className="todo-cont">

      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} delToDo={delToDo} />
      ))}

    </div>
  )
}

export default ToDos;
