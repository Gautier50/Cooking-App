import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Components/Card";
import ".././src/index.css";

const App = () => {
  const [mealsData, setMealsData] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then((res) => setMealsData(res.data.meals));
  });

  return (
    <div className="app-container">
      <h1>Cooking App</h1>
      <input type="text" placeholder="Tapez le nom d'un aliment (en anglais)" />
      <div className="meals-container">
        {mealsData.map((meal) => (
          <Card key={meal.idMeal} meal={meal}/>
        ))}
      </div>
    </div>
  );
};
export default App;
