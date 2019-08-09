import React, { useState } from 'react';


import "./App.css";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} />
    </form>
  )
}

function Todo({todo, index, completeTodo, removeTodo}) {
  return (
    <div style={{textDecoration: todo.isCompleted ? "line-through" : ''}} className="todo">
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>
          Complete
        </button>
        <button onClick={() => removeTodo(index)}>
          X
        </button>
      </div>
    </div>
  )
}

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: "Create a github account",
      isCompleted: false
    },
    {
      text: "create a new repository",
      isCompleted: false
    },
    {
      text: "make a commit to repository",
      isCompleted: false
    }
  ]);


  const addTodo = text => {
    const newTodos = [...todos, { text }
  ];
  setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div >
  )
}

export default App;