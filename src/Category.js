import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

const Item = () => {
  const { itemName } = useParams();
  //   console.log("Item name: ", name);
  console.log("Item route match: ", useRouteMatch().params);
  console.log("Item params: ", useParams());
  return (
    <div>
      <h3>{itemName}</h3>
    </div>
  );
};

const Category = () => {
  const { url, path } = useRouteMatch();
  console.log("Category Route Match: ", useRouteMatch());
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/shoes`}>Shoes</Link>
        </li>
        <li>
          <Link to={`${url}/boots`}>Boots</Link>
        </li>
        <li>
          <Link to={`${url}/footwear`}>Footwear</Link>
        </li>
      </ul>
      <Route path={`${path}/:itemName`}>
        <Item />
      </Route>
    </div>
  );
};

export default Category;
