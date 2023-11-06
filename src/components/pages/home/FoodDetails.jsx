import { Link, useLoaderData, useParams } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { CiLocationOn } from "react-icons/ci";
import axios from "axios";
import Swal from "sweetalert2";

const FoodDetails = () => {
  const foods = useLoaderData();
  // console.log(foods);
  const { id } = useParams();
  const foodInt = parseInt(id);
  const food = foods.find((food) => food.food_id === foodInt);
  console.log(food);
  const {
    food_img,
    food_name,
    donator,
    pickUp_location,
    quantity,
    expired_date,
  } = food;
  const handleAddFood = () => {
    axios
      .post("http://localhost:3000/foods", {
        food,
      })
      .then(function (response) {
        console.log(response);
        if(response.status){
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your Food has been added flourishingly",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <img
          className="max-h-96 w-full rounded-md object-cover my-4"
          src={food_img}
          alt={food_name}
        />

        <div className=" flex flex-col gap-2 align-middle">
          <h2 className="text-2xl text-green-800 font-semibold ">
            Donator : {donator}
          </h2>
          <p className="flex items-center text-xl font-semibold gap-2">
            <CiLocationOn> </CiLocationOn>Pick up Location :{pickUp_location}
          </p>{" "}
          <p className="font-semibold text-lg">Quantity :{quantity}</p>
          <h4 className="text-base mb-3 font-semibold">
            Expired date: {expired_date}
          </h4>
        </div>
        <div>
          <Link
            onClick={handleAddFood}
            className="btn btn-outline text-green-700 hover:bg-green-700 transition delay-150 duration-300 ease-in-out"
          >
            Add To Get
          </Link>
        </div>
      </div>
      <div className="my-8">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default FoodDetails;
