import React from 'react'

import Auth from './Auth';

import Layout from '../hoc/Layout';
import Home from '../components/Home';
import UserInfo from './UserInfo';
import UserList from './UserList';

import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import {useSelector} from "react-redux"

function App() {
  const user = useSelector(state => state.auth.user);

  return (
    <div className="App">
    <Router>
      <Switch>
          <Route path="/login" component={Auth} />
          <Route path={['/app', "/app/users", "/app/users/:userId", "/app/my-info"]}>
            <Layout>
                {user ? 
                  <Switch>
                    <Route path="/app/users/:userId" component={UserList} />
                    <Route path="/app/users" component={UserList} />
                    <Route path="/app/my-info" component={UserInfo}/>
                    <Route path="/app" component={Home} />
                  </Switch>
                 : <Redirect to="/login" />
                }
            </Layout>
          </Route>
          <Redirect to="/login" />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
