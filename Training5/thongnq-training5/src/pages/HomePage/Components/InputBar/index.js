import React from 'react'

import "./index.css";

const InputBar = () => {
    return (
        <div>
            <input type="text" id="myInput" placeholder="Title..." />
            <button className="addBtn">Add</button>
        </div>
    )
}

export default InputBar;
