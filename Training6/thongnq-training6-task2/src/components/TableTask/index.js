import React from 'react';

import { Table } from './TableTask.styles';

const TableTask = () => {
    return (
        <Table>
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>Backup DB</td>
                <td>Ready</td>
              </tr>
              <tr>
                <td>Backup DB</td>
                <td>Ready</td>
              </tr>
              <tr>
                <td>Backup DB</td>
                <td>Ready</td>
              </tr>
            </tbody>
          </Table>
    )
}

export default TableTask
