import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import Fruit from "./Fruit";
import fruitsData from "./FruitsData";

const Fruits = () => {
  const { url } = useRouteMatch();
  console.log("Fruits useRouteMatch:", useRouteMatch());

  const linkList = fruitsData.map((fruit) => {
    return (
      <li key={fruit.id}>
        <Link to={`${url}/${fruit.id}`}>{fruit.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <div className="container-inner">
        <h2>FRUITS</h2>
        <ul>{linkList}</ul>
      </div>
      <Route path={`${url}/:fruitId`}>
        <Fruit data={fruitsData} />
      </Route>
      <Route exact path={url}>
        <h2>Please select a fruit</h2>
      </Route>
    </div>
  );
};

export default Fruits;
