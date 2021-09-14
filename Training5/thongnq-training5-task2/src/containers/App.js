import React from 'react'

import Auth from './Auth';

import Layout from '../hoc/Layout';
import Home from '../components/Home';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
          <Route path="/login" component={Auth} />
          <Route path={['/app', "/app/users", "/app/users/:userId", "app/my-info"]}>
            <Layout>
              <Route path="/app" component={Home} />
            </Layout>
          </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
