import React from 'react'

import "./index.css"

const ToggleSwitch = ({showCompleted, setShowCompleted}) => {
    return (
        <div>
        <label class="switch">
            <input type="checkbox" checked={showCompleted} onChange={event => setShowCompleted(event.target.checked)}/>
            <span class="slider round"></span>
        </label>
        </div>
    )
}

export default ToggleSwitch
