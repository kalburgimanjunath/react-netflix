import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Login, Home, Signup, Dashboard, Movie } from './index';
export default function Main() {
  return (
    <div>
      <Switch>
        <Route path="/login">
          <Login title="Login" />
        </Route>
        <Route path="/home">
          <Home title="Home" />
        </Route>

        <Route path="/signup">
          <Signup title="Signup" />
        </Route>
        <Route path="/dashboard">
          <Dashboard title="Dashboard" />
        </Route>
        <Route path="/movie">
          <Movie title="Movie" />
        </Route>
        <Route path="/">
          <Home title="Home" />
        </Route>
        <Route path="/*" exact>
          <Home title="Home" />
        </Route>
      </Switch>
    </div>
  );
}
