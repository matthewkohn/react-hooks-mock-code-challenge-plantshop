import React, { useState } from "react";

function PlantCard({plant}) {
  const [isInStock, setIsInStock] = useState(true);

  const {name, image, price} = plant;
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button onClick={() => setIsInStock(!isInStock)} className="primary">In Stock</button>
      ) : (
        <button onClick={() => setIsInStock(!isInStock)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
