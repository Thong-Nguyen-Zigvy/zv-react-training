import React from 'react'
import "./index.css";

const Todo = ({title}) => {
    return (
        <li>{title} <span className="close"></span></li>

    )
}
export default Todo
