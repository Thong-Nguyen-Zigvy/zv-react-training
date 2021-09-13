import React from 'react'

import "./index.css";

import Todo from './Todo';


const TodoList = ({todos, showCompleted}) => {
    return (
        <div>
            <ul id="myUL">
            {todos.map(todo => <Todo key={todo.id} title={todo.name} id={todo.id} completed={todo.completed} showCompleted={showCompleted}/>)}
            </ul>
        </div>
    )
}

export default TodoList

