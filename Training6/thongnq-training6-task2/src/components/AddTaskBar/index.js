import React, {useState} from 'react';

import { Wrapper } from './AddTaskBar.styles';

import {useDispatch} from "react-redux";

import {createTask} from "../../state/actions/tasks"

const AddTaskBar = () => {
  const [taskName, setTaskName] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(createTask(taskName));
  }
    return (
        <Wrapper>

            <input 
              className="task" 
              type="text" 
              align="center" 
              placeholder="Task Name"
              value={taskName}
              onChange={event => setTaskName(event.target.value)}
              />

            <button 
              className="submit" 
              align="center"
              onClick={handleSubmit}
            >+ Task</button>

          </Wrapper>
    )
}

export default AddTaskBar
