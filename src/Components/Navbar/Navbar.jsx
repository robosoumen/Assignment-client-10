import React, { use, useEffect, useState } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router";
import toast from "react-hot-toast";
import "./Navbar.css";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("signOut successful");
      })
      .then((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      <div className="navbar bg-blue-300 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <a>Profile</a>
                <ul className="p-2">
                  <li className="bg-blue-300">
                    <NavLink to="/myFavorite">My Favorite</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                {user ? (
                <li onClick={handleSignOut} className="">
                  SignOut
                </li>
              ) : (
                <NavLink to="/register">Register</NavLink>
              )}
              </li>
            </ul>
          </div>
          <Link to="/">
            <img
              className="h-20 rounded-full"
              src="https://i.ibb.co/mCyDj2L5/8d513379-4732-472f-92a4-a63532af9b92.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <details>
                <summary>Profile</summary>
                <ul className="p-2 bg-base-100 w-40 z-1">
                  <li className="bg-blue-300">
                    <NavLink to="/myFavorite">My Favorite</NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              {user ? (
                <li onClick={handleSignOut} className="">
                  SignOut
                </li>
              ) : (
                <NavLink to="/register">Register</NavLink>
              )}
            </li>
          </ul>
        </div>
        {/* image */}
        <div className="navbar-end mx-10">
          <div className="dropdown">
            <div tabIndex={0} role="button">
               {
                user?.photoURL ? <img
                className="rounded-full h-10"
                src={user?.photoURL}
                alt="Image not found"
              /> : <TbGridDots />
               }
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-blue-300 rounded-box z-10 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/myReview">My Review</NavLink>
              </li>
              <li>
                <NavLink to="/postReview">Add Review</NavLink>
              </li>
              <li>
                {user ? (
                  <li onClick={handleSignOut} className="">
                    SignOut
                  </li>
                ) : (
                  <Link to="/register">
                    Register
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
        {/* theme */}
        <div className="bg-white rounded-full">
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            defaultChecked={localStorage.getItem("theme") === "dark"}
            className="toggle"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
