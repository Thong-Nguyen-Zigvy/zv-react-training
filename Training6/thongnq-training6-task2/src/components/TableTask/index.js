import React, {useEffect} from 'react';

import { Table } from './TableTask.styles';

import {useSelector, useDispatch} from "react-redux";

import {updateDefault, updateStatusReady} from "../../state/actions/tasks"

const TableTask = () => {

    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(updateDefault());
    }, [dispatch])

    const handleChangeStatus = (id) => {
      dispatch(updateStatusReady(id))
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
                  onClick={() => handleChangeStatus(task.id)}
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
