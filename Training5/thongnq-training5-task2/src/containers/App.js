import React from 'react'

import Auth from './Auth';

import Layout from '../hoc/Layout';
import Home from '../components/Home';
import UserInfo from './UserInfo';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
          <Route path="/login" component={Auth} />
          <Route path={['/app', "/app/users", "/app/users/:userId", "/app/my-info"]}>
            <Layout>
              <Switch>
                <Route path="/app/my-info" component={UserInfo}/>
                <Route path="/app" component={Home} />

              </Switch>
            </Layout>
          </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
