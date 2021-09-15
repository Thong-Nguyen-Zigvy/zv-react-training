import React from "react";

import {GlobalStyle, Wrapper, Content} from "./GlobalStyles";

import AddTaskBar from "./components/AddTaskBar";

import NetworkStatus from "./components/NetworkStatus";

import TableTask from "./components/TableTask";

function App() {
  return (
    <div className="App">
    
      <Wrapper>
        <Content>

          <NetworkStatus />
          <p className="sign">Task Submission</p>
          
          <AddTaskBar />

          <TableTask />
          
        </Content>
      </Wrapper>
      <GlobalStyle />
    </div>
  );
}

export default App;
