import React from 'react'

import Auth from './pages/Auth';

import Layout from './hoc/Layout';
import Home from './pages/Home';
import UserInfo from './pages/UserInfo';
import UserList from './pages/UserList';
import UserListDetail from './pages/UserListDetail';

import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import {useSelector} from "react-redux"

function App() {
  const user = useSelector(state => state.auth.user);

  return (
    <div className="App">
    <Router>
      <Switch>
          <Route path="/login" component={Auth} />
          <Route path="/app">
            <Layout>
                {user ? 
                  <Switch>
                    <Route path="/app/users/:userId" component={UserListDetail} />
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
