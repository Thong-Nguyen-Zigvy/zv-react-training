import React from 'react';

import { Wrapper } from './AddTaskBar.styles';

const AddTaskBar = () => {
    return (
        <Wrapper>

            <input 
              className="task" 
              type="text" 
              align="center" 
              placeholder="Task Name"
              />

            <button className="submit" align="center">+ Task</button>

          </Wrapper>
    )
}

export default AddTaskBar
