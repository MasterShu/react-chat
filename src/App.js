import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';

import './App.css';
import Login from './pages/logon/login';
// import Register from './pages/logon/register';
require('./assets/static/js/jmessage-sdk-web.2.6.0.min.js')

class App extends Component {
  render() {
    return (
      <div className="site">
        <Switch>
          <Redirect exact from="/"  to="login"/>
          {/* <Route path="/index" component={Index} /> */}
          {/* <Route path="/list" component={UserList} /> */}
          {/* <Route path="/me" component={Me}/> */}
          <Route path="/login" component={Login} />
          {/* <Route path="/register" component={Register} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
