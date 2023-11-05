import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import Navbar from "../navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { signInUser, googleSignInUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        form.reset();
        if (user) {
          navigate("/");
        }
      })
      .catch((error) => setError(error.message));
  };

  const handleGoggleSignIn = () => {
    googleSignInUser()
      .then((res) => {
        const googleUser = res.user;
        console.log(googleUser);
        if (user) {
          navigate("/");
        }
        // if (user) {
        //   navigate("/");
        // }
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-gradient-to-r from-[#318a35] to-[rgba(21, 21, 21, 0.00) 100%)]-full text-white">
        <div className="hero-content w-1/2 flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card w-3/4 flex-shrink-0 shadow-2xl  bg-base-100">
            <form onSubmit={handleSignIn} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input text-black input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input text-black input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-800 font-bold text-white hover:bg-green-500 delay-100 ">
                  <AiOutlineMail className="text-4xl  mr-1"></AiOutlineMail>{" "}
                  Sign In With Email
                </button>
                <button
                  onClick={handleGoggleSignIn}
                  className="btn my-4 bg-green-800 font-bold text-white hover:bg-green-500 delay-100 "
                >
                  <FcGoogle className="text-4xl  mr-1"></FcGoogle> Login With
                  Google
                </button>

                <p className="text-black text-center capitalize ">
                  Do not have an account{" "}
                  <Link
                    to="/register"
                    className="underline font-bold text-green-800"
                  >
                    Please Register
                  </Link>
                </p>
                <div>
                  <p className="text-red-700 text-center font-semibold">
                    {error}
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
