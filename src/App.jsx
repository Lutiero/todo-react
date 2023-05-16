import React, {useState} from 'react'
import './App.css'
import Todo from "./components/Todo.jsx";
import TodoForm from "./components/TodoForm.jsx";
import Search from "./components/Search.jsx";
import Filter from "./components/Filter.jsx";

function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [order, setOrder] = useState('Asc');

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


  return (
    <div className='app'>
      <h1>Todo List</h1>
      <Search search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter} setOrder={setOrder}/>
      <div className='todo-list'>
        {todos
          .filter((todo) =>
            filter === 'all'
              ? true
              : filter === 'completed'
                ? todo.isCompleted
                : !todo.isCompleted
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            order === 'ASC'
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text))
          .map((todo) =>
            (<Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
            ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>

  )
}

export default App
