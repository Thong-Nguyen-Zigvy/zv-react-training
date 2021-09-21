import React from 'react'
import "./index.css";

import { Link } from 'react-router-dom';

const Todo = ({title, id}) => {
    return (
        <li><Link to={`/todos/${id}`}>{title} </Link></li>

    )
}
export default Todo
