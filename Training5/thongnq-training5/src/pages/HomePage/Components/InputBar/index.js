import React, {useState} from 'react'

import "./index.css";

const InputBar = ({createNewTodo}) => {

    const [text, setText] = useState("");

    const handleCreateTodo = () => {
        createNewTodo(text);
    }
    return (
        <div>
            <input type="text"
                id="myInput"
                placeholder="Title..."
                value={text}
                onChange={event => setText(event.target.value)}
            />
            <button className="addBtn" onClick={handleCreateTodo}>Add</button>
        </div>
    )
}

export default InputBar;
