import { useLoaderData } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Food from "../home/Food";
import { useState } from "react";

const AvailableFood = () => {
  const foods = useLoaderData();
   const [query,setQuery] =useState(''); 
  return (
    <div>
      <Navbar></Navbar>

      <div className="text-center my-8">
        <div className="join ">
          <div>
            <div>
              <input
                className="input input-bordered join-item"
                placeholder="Search"
                onChange={(e)=>setQuery(e.target.value)}
              />
            </div>
          </div>
          <select className="select select-bordered join-item">
            <option disabled selected>
              Filter
            </option>
            <option>Pasta</option>
            <option>Rice</option>
            <option>Biriyani</option>
          </select>
          <div className="indicator">
            <button className="btn text-white font-semibold bg-green-700  hover:bg-green-500 transition-all  join-item">Search</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 my-8 gap-4">
        {foods.filter((food => food.food_name.toLowerCase().includes(query))).map((food, index) => (
          <Food food={food} key={index}></Food>
        ))}
      </div>
    </div>
  );
};

export default AvailableFood;
