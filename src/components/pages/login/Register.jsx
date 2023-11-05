import { Link, useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(createUser);
  const handleRegister = (e) => {
    e.preventDefault();
    const toastId = toast.loading("Logging in..");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    const name = form.name.value;
    console.log(email, password, photoUrl, name);
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        form.reset();
        if (user) {
          toast.success("successfully registered...", { id: toastId });
          navigate("/login");
        }
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div className="max-h-screen">
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-gradient-to-r from-[#318a35] to-[rgba(21, 21, 21, 0.00) 100%)]-full text-white">
        <div className="hero-content w-1/2 flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Registration!</h1>
          </div>
          <div className="card w-3/4 flex-shrink-0 shadow-2xl  bg-base-100">
            <form onSubmit={handleRegister} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="Photo URL"
                  className="input text-black input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
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
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-800 font-bold text-white hover:bg-green-500 delay-100 ">
                  Register Now
                </button>
                <p className="text-black text-center capitalize ">
                  Already have an{" "}
                  <Link
                    to="/login"
                    className="underline font-semibold text-green-800"
                  >
                    Please sign in
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

export default Register;
