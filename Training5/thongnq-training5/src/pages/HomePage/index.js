import React from 'react';

import "./index.css";

import InputBar from './Components/InputBar';
import TodoList from './Components/TodoList';

function HomePage() {
  return (
    <div className="HomePage">
      <div id="myDIV" class="header">
        <h2>My To Do List</h2>
        <InputBar />
      </div>

      <TodoList />
    </div>
  );
}

export default HomePage;
