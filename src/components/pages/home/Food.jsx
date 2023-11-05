import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Food = ({ food }) => {
  const {
    food_img,
    food_name,
    donator,
    pickUp_location,
    quantity,
    expired_date,
    id,
  } = food;

  return (
    <div className="card flex flex-col max-h-[500px]  p-2 glass">
      <figure className="flex-grow">
        <img className="object-cover" src={food_img} />
      </figure>
      <div className="card-body text-green-700">
        <h2 className="card-title">{food_name}</h2>
        <p>Donator:{donator}</p>
        <div>
          <p>
            PickUp Location :{pickUp_location} <span>{quantity}</span>
          </p>
          <h2>Expired Date: {expired_date}</h2>
        </div>
        <div className="card-actions flex  justify-between">
          <Link
            to={`/food-details/${id}`}
            className="btn btn-outline text-green-700 hover:bg-green-700"
          >
            View Details!
          </Link>
          <Link
            to="/available-food"
            className="btn btn-outline text-green-700 hover:bg-green-700"
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};
Food.propTypes = {
  food: PropTypes.obj,
};
export default Food;
