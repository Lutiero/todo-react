import {useState} from 'react';

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        if(!value || !category) {
            return
        }
        addTodo(value, category);
        setValue('')
        setCategory('')
    }

    return (
        <div className='todo-form'>
            <h2>Create task:</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Type the task'
                       value={value}
                       onChange={(e) => setValue(e.target.value)}/>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Choose a category</option>
                    <option value="Job">Job</option>
                    <option value="Personal">Personal</option>
                    <option value="Studies">Studies</option>
                </select>
                <button type='submit'>Create</button>
            </form>
        </div>
    );
};

export default TodoForm;