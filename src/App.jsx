import React, {useState} from 'react'
import './App.css'
import Todo from "./components/Todo.jsx";
import TodoForm from "./components/TodoForm.jsx";

function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'todo 1',
            category: 'Trabalho',
            isCompleted: false
        },
        {
            id: 2,
            text: 'todo 2',
            category: 'Estudo',
            isCompleted: false
        },
        {
            id: 3,
            text: 'todo 3',
            category: 'Pessoal',
            isCompleted: false
        }
    ]);

    const addTodo = (text, category) => {
        const newTodo = [...todos, {
            id: Math.floor(Math.random() * 10000),
            text,
            category,
            isCompleted: false
        }]
        setTodos(newTodo);
    }
    return (
        <div className='app'>
            <h1>Lista de tarefas</h1>
            <div className='todo-list'>
                {todos.map((todo) => (
                    <Todo todo={todo} key={todo.id}/>
                ))}
            </div>
            <TodoForm addTodo={addTodo} />
        </div>

    )
}

export default App
