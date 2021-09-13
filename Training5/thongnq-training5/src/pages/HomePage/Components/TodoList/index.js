import React from 'react'

import "./index.css";

import Todo from './Todo';

const TodoList = () => {
    return (
        <div>
            <ul id="myUL">
            <Todo title="Hit the gym"></Todo>
        </ul>
        </div>
    )
}

export default TodoList

