import React from "react";
import { useParams, useRouteMatch, Link, Route } from "react-router-dom";

const Fruit = () => {
  const { fruitName } = useParams();
  console.log(useParams());
  return (
    <div>
      <h2>{fruitName}</h2>
    </div>
  );
};

const FruitsList = () => {
  const { url, path } = useRouteMatch();
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/orange`}>Orange</Link>
        </li>
        <li>
          <Link to={`${url}/apple`}>Apple</Link>
        </li>
        <li>
          <Link to={`${url}/banana`}>Banana</Link>
        </li>
      </ul>
      <Route path={`${path}/:fruitName`}>
        <Fruit />
      </Route>
    </div>
  );
};

export default FruitsList;
