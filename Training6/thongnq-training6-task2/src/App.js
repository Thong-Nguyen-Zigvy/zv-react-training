import React from "react";

import {GlobalStyle, Wrapper, Content} from "./GlobalStyles";

function App() {
  return (
    <div className="App">
    
      <Wrapper>
        <Content>
          <p className="network">Network: Online</p>
          <p className="sign">Task Submission</p>
          
          <div className="form">

            <input 
              className="task" 
              type="text" 
              align="center" 
              placeholder="Task Name"
              />

            <button className="submit" align="center">+ Task</button>

          </div>

          <table>
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
          </table>
        </Content>
      </Wrapper>
      <GlobalStyle />
    </div>
  );
}

export default App;
