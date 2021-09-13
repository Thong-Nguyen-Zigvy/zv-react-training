import React, {useEffect, useState} from 'react';

import "./index.css";

import InputBar from './Components/InputBar';
import TodoList from './Components/TodoList';
import Search from './Components/Search';
import ToggleSwitch from './Components/ToggleSwitch';

import {useDispatch, useSelector} from "react-redux"

import {retrieveTodos, createTodo, filterTodoByName} from "../../state/actions/todos";

function HomePage() {

  const [showCompleted, setShowCompleted] = useState(false);

  console.log(showCompleted);

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(retrieveTodos());
  }, [dispatch])

  const createNewTodo = (name) => {
    dispatch(createTodo(name, false));
  }

  const handleSeach = (name) => {
    if(name.trim() === ""){
      dispatch(retrieveTodos());
    }
    dispatch(filterTodoByName(name));
  }

  return (
    <div className="HomePage">
      <div id="myDIV" className="header">
        <Search handleSearch={handleSeach}/>

        <ToggleSwitch showCompleted={showCompleted} setShowCompleted={setShowCompleted}/>
        <h2>My To Do List</h2>
        <InputBar createNewTodo={createNewTodo}/>
      </div>
      {todos.length === 0 ? "No todo found!" : null}
      <TodoList todos={todos} showCompleted={showCompleted}/>
    </div>
  );
}


export default HomePage;
