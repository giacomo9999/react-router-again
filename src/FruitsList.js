import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

const Fruit = () => {
  const { fruitName } = useParams();
  console.log("Fruit here- ", fruitName);
  return (
    <div>
      <h2>{fruitName}</h2>
    </div>
  );
};

const FruitsList = () => {
  const { url, path } = useRouteMatch();
  console.log(useRouteMatch());
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
