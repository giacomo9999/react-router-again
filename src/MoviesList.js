import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

const Movie = () => {
  const { movieName } = useParams();
  console.log(useParams());
  return (
    <div>
      <h2>{movieName}</h2>
    </div>
  );
};

const MoviesList = () => {
  const { url, path } = useRouteMatch();
  console.log(useRouteMatch);
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/the-godfather`}>The Godfather</Link>
        </li>
        <li>
          <Link to={`${url}/2001`}>2001</Link>
        </li>
        <li>
          <Link to={`${url}/on-the-waterfront`}>On The Waterfront</Link>
        </li>
      </ul>

      <Route path={`${path}/:movieName`}>
        <Movie />
      </Route>
    </div>
  );
};

export default MoviesList;
