import React, { useState } from "react";

function NewPlantForm({ onAddPlantItem }) {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const plantData = {
      name: name,
      image: imageURL,
      price: price,
    }
    fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(plantData),
  })
    .then((r) => r.json())
    .then((newItem) => onAddPlantItem(newItem));
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" placeholder="Plant name" value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="text" 
          name="image" placeholder="Image URL" 
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" placeholder="Price" 
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
