import React, {useEffect} from 'react';

import { Table } from './TableTask.styles';

import {useSelector, useDispatch} from "react-redux";

import {updateStatusReady, updateDefault, updateStatusErrorSubmit} from "../../state/actions/tasks"

const TableTask = () => {

    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(updateDefault());
    }, [])

    const handleChangeStatus = (id, status) => {
      if(status === "Draft"){
        dispatch(updateStatusReady(id));
      } else {
        dispatch(updateStatusErrorSubmit(id));

      }
    }
    
    return (
        <Table>
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>
              {tasks.map(task => (
                <tr key={task.id}>
                  <td>{task.name}</td>
                  {/* disabled={true} */}
                  <td><button 
                  onClick={() => handleChangeStatus(task.id, task.status)}
                  disabled={task.status !== "Draft" && task.status !== "Error" ? true : false}
                  >
                  {task.status}
                  </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
    )
}

export default TableTask
