import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  isActive ? "btn btn-md bg-[#0C4428]" : "btn btn-md btn-ghost";
                }}
              >
                Home
              </NavLink>
            </li>

            {user && (
              <>
                <li>
                  <NavLink
                    to="/available-food"
                    className={({ isActive }) => {
                      isActive
                        ? "btn btn-md bg-[#0C4428]"
                        : "btn btn-md btn-ghost";
                    }}
                  >
                    Available Foods
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/add-food"
                    className={({ isActive }) => {
                      isActive
                        ? "btn btn-md bg-[#0C4428]"
                        : "btn btn-md btn-ghost";
                    }}
                  >
                    Add Food
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/manage-food"
                    className={({ isActive }) => {
                      isActive
                        ? "btn btn-md bg-[#0C4428]"
                        : "btn btn-md btn-ghost";
                    }}
                  >
                    Manage My Foods
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/request-food"
                    className={({ isActive }) => {
                      isActive
                        ? "btn btn-md bg-[#0C4428]"
                        : "btn btn-md btn-ghost";
                    }}
                  >
                    My Food Request
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl  bg-[#508101] hover:bg-[#6eb103] text-white">
          FlavorSwap
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                isActive ? "btn btn-md bg-[#0C4428]" : "btn btn-md btn-ghost";
              }}
            >
              Home
            </NavLink>
          </li>

          {user && (
            <>
              <li>
                <NavLink
                  to="/available-food"
                  className={({ isActive }) => {
                    isActive
                      ? "btn btn-md bg-[#0C4428]"
                      : "btn btn-md btn-ghost";
                  }}
                >
                  Available Foods
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/add-food"
                  className={({ isActive }) => {
                    isActive
                      ? "btn btn-md bg-[#0C4428]"
                      : "btn btn-md btn-ghost";
                  }}
                >
                  Add Food
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/manage-food"
                  className={({ isActive }) => {
                    isActive
                      ? "btn btn-md bg-[#0C4428]"
                      : "btn btn-md btn-ghost";
                  }}
                >
                  Manage My Foods
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/request-food"
                  className={({ isActive }) => {
                    isActive
                      ? "btn btn-md bg-[#0C4428]"
                      : "btn btn-md btn-ghost";
                  }}
                >
                  My Food Request
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <span className="text-xl font-semibold text-green-500 mr-2 flex items-end">
              {user.email}
            </span>
            <button
              onClick={handleLogout}
              className="btn btn-md bg-[#508101] hover:bg-[#6eb103] text-white"
            >
              Log Out
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="btn btn-md bg-[#508101] hover:bg-[#6eb103] text-white"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
