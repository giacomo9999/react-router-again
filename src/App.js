import React from "react";
import { Link, Route, Switch } from "react-router-dom";

const Home = () => {
  console.log("Home Route here");
  return (
    <div className="container-inner">
      <h2>Home</h2>
    </div>
  );
};

const Category = () => {
  console.log("Category Route here");
  return (
    <div className="container-inner">
      <h2>Category</h2>
    </div>
  );
};

const Products = () => {
  console.log("Products Route here");
  return (
    <div className="container-inner">
      <h2>Products</h2>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/category" exact>
        <Category />
      </Route>

      <Route path="/products" exact>
        <Products />
      </Route>
    </div>
  );
}
