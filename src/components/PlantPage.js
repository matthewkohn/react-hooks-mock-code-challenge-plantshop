import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantItems, setPlantItems] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(r => r.json())
      .then(plants => setPlantItems(plants));
  }, []);

  function handleAddPlant(newPlant) {
    const updatedPlantsArray = [...plantItems, newPlant];
    setPlantItems(updatedPlantsArray);
  }

  const displayedPlants = plantItems.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main>
      <NewPlantForm 
        onAddPlantItem={handleAddPlant} 
      />
      <Search 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}  
      />
      <PlantList plants={displayedPlants} />
    </main>
  );
}

export default PlantPage;
