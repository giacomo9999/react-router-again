import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Category from "./Category";

const Home = () => {
  console.log("Home Route Match: ", useRouteMatch());
  return (
    <div>
      <h2>HOME</h2>
    </div>
  );
};

const Product = () => {
  console.log("Product Route Match: ", useRouteMatch());
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
        <Route path="/:id">
          <Product />
        </Route>
      </Switch>
    </div>
  );
}
