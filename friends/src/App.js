import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <div className="friends-logo-wrapper">
          <img className="friends-logo" alt="TV show friends logo" src={"https://cdn.freebiesupply.com/logos/large/2x/friends-1-logo-png-transparent.png"}/>
          </div>
          <div className="links">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friendsList">Friends List</Link>
          </li>
          </div>
        </ul>
        <Switch>
          <PrivateRoute path="/friendsList" component={FriendsList}/>
          <Route path="/login" component={LoginForm} />
          <Route component={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
