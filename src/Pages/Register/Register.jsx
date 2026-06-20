import React, { use, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const Register = () => {
  const { setUser, signUp, googleLogIn } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  // register handler
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, photo, password);

    if (!passwordValidation.test(password)) {
      setPasswordError(
        "Password must have 6+ character with uppercase & lowercase",
      );
      return;
    }

    signUp(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location.state || "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleLogIn = (e) => {
    e.preventDefault();

    googleLogIn()
      .then((result) => {
        setUser(result.user);
        navigate(location.state || "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleRegisterSubmit}>
                <fieldset className="fieldset">
                  {/* name */}
                  <label className="label">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="input"
                    placeholder="Your Name"
                    required
                  />
                  {/* email */}
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Your Email"
                    required
                  />
                  {/* image */}
                  <label className="label">Image</label>
                  <input
                    name="photo"
                    type="text"
                    className="input"
                    placeholder="PhotoURL"
                  />
                  {/* password */}
                  <label className="label"></label>
                   <div className="relative">
                    <input
                      name=""
                      type={showPassword ? "text" : "password"}
                      className="input"
                      placeholder="Password"
                      required
                    />
                    <button
                      onClick={handleTogglePassword}
                      className=" absolute right-6 top-3"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <label className="label">Confirm Password</label>
                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="input"
                      placeholder="Confirm Password"
                      required
                    />
                    <button
                      onClick={handleTogglePassword}
                      className=" absolute right-6 top-3"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  {passwordError && (
                    <p className="text-red-600">{passwordError}</p>
                  )}
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Register</button>
                  {/* Google */}
                  <button
                    onClick={handleGoogleLogIn}
                    className="btn bg-white text-black border-[#e5e5e5]"
                  >
                    <svg
                      aria-label="Google logo"
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <path d="m0 0H512V512H0" fill="#fff"></path>
                        <path
                          fill="#34a853"
                          d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                        ></path>
                        <path
                          fill="#4285f4"
                          d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                        ></path>
                        <path
                          fill="#fbbc02"
                          d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                        ></path>
                        <path
                          fill="#ea4335"
                          d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                        ></path>
                      </g>
                    </svg>
                    Login with Google
                  </button>
                  <p>
                    Already have an Account? Please{" "}
                    <Link
                      to="/login"
                      className="text-blue-500 hover:text-blue-800 text-xl"
                    >
                      Login
                    </Link>
                  </p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
