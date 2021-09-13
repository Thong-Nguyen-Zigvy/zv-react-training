import React from 'react'
import "./index.css";

import { Link } from 'react-router-dom';

const Todo = ({title, id, completed, showCompleted}) => {
    return (
        <li className={completed && showCompleted ? "checked" : ""}><Link to={`/todos/${id}`}>{title} <span className="close"></span></Link></li>

    )
}
export default Todo
