import React from "react";
import { Link, Route, Switch } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>HOME</h2>
    </div>
  );
};

const Category = () => {
  return (
    <div>
      <h2>CATEGORY</h2>
    </div>
  );
};

const Product = () => {
  return (
    <div>
      <h2>PRODUCT</h2>
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
            <Link to="/category">CATEGORY</Link>
          </li>
          <li>
            <Link to="/product">PRODUCT</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
      </Switch>
    </div>
  );
}
