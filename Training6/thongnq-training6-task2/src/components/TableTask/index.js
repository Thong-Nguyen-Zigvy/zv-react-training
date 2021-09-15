import React from 'react';

import { Table } from './TableTask.styles';

import {useSelector, useDispatch} from "react-redux";

import {updateStatus} from "../../state/actions/tasks"

const TableTask = () => {

    const tasks = useSelector(state => state.tasks);
    console.log(tasks);
    const dispatch = useDispatch();

    const handleChangeStatus = (id) => {
      dispatch(updateStatus(id));
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
                  disabled={task.status !== "Draft" ? true : false}
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
