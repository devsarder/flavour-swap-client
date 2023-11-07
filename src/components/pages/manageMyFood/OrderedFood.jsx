
// eslint-disable-next-line react/prop-types
const OrderedFood = ({ orderedFood }) => {
  console.log(orderedFood);
  // eslint-disable-next-line react/prop-types
  const { food } = orderedFood;
  // eslint-disable-next-line react/prop-types
  const { food_img, food_name, donator, expired_date, quantity } =
    food;

  return (
    <div className=" bg-green-400 my-2 max-w-md  rounded-md p-2">
      <div className="flex gap-3 ">
          <img
            className="overflow-hidden w-28 h-28 object-cover rounded-md"
            src={food_img}
            alt=""
          />
        <div className="text-black font-semibold">
          <p>{food_name}</p>
          <h2>Donator: {donator}</h2>
          <span>Expired Date:{expired_date}</span>
          <p>Quantity: {quantity}</p>
        </div>
      </div>
      <div className="flex  justify-around my-2">
        <button
          to="/available-food"
          className="btn  btn-outline text-black hover:bg-green-700 transition delay-150 duration-300 ease-in-out"
        >
         Delete
        </button>
        <button
          to="/available-food"
          className="btn btn-outline text-black hover:bg-green-700 transition delay-150 duration-300 ease-in-out"
        >
         Confirm
        </button>
      </div>
    </div>
  );
};

export default OrderedFood;

// const OrderedFood = {
//   food: {
//     food_img: "ghjk",
//     food_name: "ffsfa",
//   },
// };
