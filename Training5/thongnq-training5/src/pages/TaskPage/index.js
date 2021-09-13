import React, {useState, useEffect} from 'react'

import { useParams } from 'react-router';

import { useSelector, useDispatch } from 'react-redux';

import {updateTodo, deleteTodo} from "../../state/actions/todos"

import { useHistory } from 'react-router';

import "./index.css";



const TaskPage = () => {
    const [name, setName] = useState('');
    const [completed, setCompleted] = useState(false);

    const dispatch = useDispatch();

    const history = useHistory();

    const todos = useSelector(state => state.todos);

    const {id} = useParams();

    const todo = todos.find(todo => todo.id === id);

    useEffect(() => {
        setName(todo.name);
        setCompleted(todo.completed);
    }, []);

    const handleUpdateTodo = () => {
        dispatch(updateTodo(id, {name, completed}));
        history.push("/todos");
    }

    const handleDeleteTodo = () => {
        dispatch(deleteTodo(id));
        history.push("/todos");
    }



    return (
        <div className="container">
            <h2>Todo</h2>

            <form>
            <div className="form__group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={event => setName(event.target.value)}/>
            </div>

            <div className="form__group">
                <label htmlFor="completed">Completed?</label>
                <input type="checkbox" id="completed" checked={completed} onChange={event => setCompleted(event.target.checked)} />

            </div>

            </form>

            <button onClick={handleUpdateTodo}>Update</button>
            <button onClick={handleDeleteTodo}>Delete</button>
        </div>
    )
}

export default TaskPage
