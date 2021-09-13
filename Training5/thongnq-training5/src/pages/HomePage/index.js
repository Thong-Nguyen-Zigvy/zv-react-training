import React, {useEffect} from 'react';

import "./index.css";

import InputBar from './Components/InputBar';
import TodoList from './Components/TodoList';

import {useDispatch, useSelector} from "react-redux"

import {retrieveTodos} from "../../state/actions/todos";

function HomePage() {

  const todos = useSelector(state => {
    return state.todos;});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveTodos());
  }, [])

  return (
    <div className="HomePage">
      <div id="myDIV" className="header">
        <h2>My To Do List</h2>
        <InputBar />
      </div>

      <TodoList todos={todos}/>
    </div>
  );
}


export default HomePage;
