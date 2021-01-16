import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import FruitsList from "./FruitsList";
import Fruits from "./Fruits";

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
            <Link to="/fruits-list">FRUITS LIST</Link>
          </li>
          <li>
            <Link to="/fruits-catalog">FRUITS CATALOG</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/fruits-list">
          <FruitsList />
        </Route>
        <Route path="/fruits-catalog">
          <Fruits />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
