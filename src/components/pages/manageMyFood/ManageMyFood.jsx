import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import OrderedFood from "./orderedFood";

const ManageMyFood = () => {
  const [addedFoods, setAddFoods] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/foods")
      .then((res) => res.json())
      .then((data) => setAddFoods(data));
  }, []);
//   console.log(addedFoods);
  return (
    <div>
      <Navbar></Navbar>
      <div>
        {addedFoods.map((item) => (
          <OrderedFood orderedFood={item} key={item.food_id}></OrderedFood>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ManageMyFood;
