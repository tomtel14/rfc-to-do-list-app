import React, { useState } from 'react';

function AddToDo({ addToDo }) {

  const [title, setTitle] = useState('');

  const onChangeFunc = (e) => {
    setTitle(e.target.value);
  }

  const onSubmitFunc = (e) => {
    e.preventDefault();
    if (title.length === 0) {
      alert('Input Required');
    } else {
      addToDo(title);
      setTitle('');
    }
  }

  return (
    <form onSubmit={onSubmitFunc}>
      <input
        className="placeholder-input"
        type="text"
        name="title"
        placeholder="Add Item..."
        value={title}
        onChange={onChangeFunc}
        autoFocus
      />
      <input
        type="submit"
        value="Submit"
        className="btn"
      />
    </form>
  )
}

export default AddToDo;
