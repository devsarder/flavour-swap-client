import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../components/pages/Error/Error";
import Home from "../components/pages/home/Home";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/login/Register";
import ManageMyFood from "../components/pages/manageMyFood/ManageMyFood";
import MyFoodReq from "../components/pages/myFoodReq/MyFoodReq";
import AvailableFood from "../components/pages/AvailableFood/AvailableFood";
import AddFood from "../components/pages/AddFood/AddFood";
import FoodDetails from "../components/pages/home/FoodDetails";
import PrivateRoute from "../components/pages/home/PrivateRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/manage-food",
        element: <ManageMyFood></ManageMyFood>,
      },
      {
        path: "/request-food",
        element: <MyFoodReq></MyFoodReq>,
      },
      {
        path: "/available-food",
        element: (
          <PrivateRoute>
            <AvailableFood></AvailableFood>
          </PrivateRoute>
        ),
        loader: () => fetch("featuredFood.json"),
      },
      {
        path: "/add-food",
        element: <AddFood></AddFood>,
      },
      {
        path: "/food-details/:id",
        element: (
          <PrivateRoute>
            <FoodDetails></FoodDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("../../public/featuredFood.json"),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);
