import { useEffect, useState } from "react";
import Food from "./Food";

const Foods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("featuredFood.json")
      .then((res) => res.json())
      .then((foods) => setFoods(foods));
  }, []);
  return (
    <div>
      <div className="transition-all delay-100">
        <h2 className="text-4xl my-10 font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-900 to-green-500">
          Find Food Resources Near You
        </h2>
      </div>
      <div className="grid grid-cols-3 my-8 gap-4">
        {foods.map((food, index) => (
          <Food food={food} key={index}></Food>
        ))}
      </div>
    </div>
  );
};

export default Foods;
