import React from "react";
import { useParams } from "react-router-dom";

const Fruit = ({ data }) => {
  const { fruitId } = useParams();
  const fruit = data.find((f) => f.id === Number(fruitId));
  console.log("Fruit info: ", fruit);
  let fruitData;

  if (fruit) {
    fruitData = (
      <div>
        <h2>{fruit.name}</h2>
        <h4>{fruit.description}</h4>
        <br/>
        <hr />
        <h2>{fruit.status}</h2>
      </div>
    );
  } else {
    <h2>Sorry, that fruit doesn't exist.</h2>;
  }
  return (
    <div className="fruit-info">
      <div>{fruitData}</div>
    </div>
  );
};

export default Fruit;
