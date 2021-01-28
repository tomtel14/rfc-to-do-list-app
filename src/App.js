import React, { useState } from 'react';
import './App.css';
import { data } from './data';
import Header from './components/Header';
import AddToDo from './components/AddToDo';
import ToDos from './components/ToDos';
import ClearToDos from './components/ClearToDos';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [todos, setTodos] = useState(data);

  const addToDo = (title) => {

    const newToDo = {
      id: uuidv4(),
      title: title,
      completed: false
    }

    setTodos([...todos, newToDo]);
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    )
  }

  const delToDo = (id) => {
    setTodos([...todos.filter(todo => todo.id !== id)])
  }

  const clearToDos = () => {
    setTodos([]);
  }


  return (
    <div className="app">
      <div className="container">
        <Header />
        <AddToDo addToDo={addToDo} />
        <ToDos todos={todos} toggleComplete={toggleComplete} delToDo={delToDo} />
        <ClearToDos todos={todos} clearToDos={clearToDos} />
      </div>
    </div>
  )
}

export default App;

