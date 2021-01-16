import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import FruitsList from "./FruitsList";

const Home = () => {
  return (
    <div>
      <h2>HOME</h2>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/fruitsList">FRUITS LIST</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/fruitsList">
          <FruitsList />
        </Route>
      </Switch>
    </div>
  );
}
