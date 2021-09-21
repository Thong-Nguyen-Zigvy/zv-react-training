import React, {useEffect, useState, useMemo} from 'react';

import "./index.css";

import InputBar from './Components/InputBar';
import TodoList from './Components/TodoList';
import Search from './Components/Search';
import ToggleSwitch from './Components/ToggleSwitch';

import {useDispatch, useSelector} from "react-redux"

import {retrieveTodos, createTodo} from "../../state/actions/todos";

function HomePage() {

  const [showCompleted, setShowCompleted] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const getVisibleTodos = React.useMemo(() => {
    if(searchTerm.trim() === "" && !showCompleted){
      return todos;
    } else if(searchTerm.trim() !== "" && !showCompleted){
      return todos.filter(todo => todo.name.includes(searchTerm));
    } else if(searchTerm.trim() === "" && showCompleted){
      return todos.filter(todo => !todo.completed)
    } else {
      return todos.filter(todo => !todo.completed).filter(todo => todo.name.includes(searchTerm));
    }
  }, [searchTerm, showCompleted, todos]);


  useEffect(() => {
    dispatch(retrieveTodos());
  }, [dispatch])

  const createNewTodo = (name) => {
    dispatch(createTodo(name, false));
  }

  const handleSeach = (name) => {
    setSearchTerm(name);
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
      <TodoList todos={getVisibleTodos}/>
    </div>
  );
}


export default HomePage;
