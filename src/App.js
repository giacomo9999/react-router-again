import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import MoviesList from "./MoviesList";

const Home = () => {
  return (
    <div>
      <h2>HOME</h2>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/moviesList">LIST OF MOVIES</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/moviesList">
          <MoviesList />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
