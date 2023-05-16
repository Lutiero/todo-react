import React, {useState} from 'react'
import './App.css'
import Todo from "./components/Todo.jsx";
import TodoForm from "./components/TodoForm.jsx";
import Search from "./components/Search.jsx";

function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');

  const addTodo = (text, category) => {
    const newTodo = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false
    }]
    setTodos(newTodo);
  }
  const removeTodo = (id) => {
    let novaLista = todos.filter((todo) => {
      return todo.id !== id;
    })
    setTodos(novaLista);
  }

  const completeTodo = (id) => {
    let newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    setTodos(newTodos);
  }

  const searchTodo = () => {

  }

  return (
    <div className='app'>
      <h1>Todo List</h1>
      <Search search={search} setSearch={setSearch}/>
      <div className='todo-list'>
        {todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
          .map((todo) => (<Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
          ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>

  )
}

export default App
