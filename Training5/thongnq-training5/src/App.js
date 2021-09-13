import React from 'react'

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import HomePage from './pages/HomePage';
import TaskPage from './pages/TaskPage';

import {Provider} from 'react-redux';

import store from './state/store';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/todos"]} component={HomePage}/>

        <Route path="/todos/:id" component={TaskPage} />
      </Switch>

    </Router>
  );
}

export default App;
