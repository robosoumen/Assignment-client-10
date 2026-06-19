import React, { use, useEffect, useState } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router";
import { HiH1 } from "react-icons/hi2";
import toast from "react-hot-toast";
import "./Navbar.css";

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

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/profile">My Profile</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );

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
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <img
            className="h-[50px] w-[70px]"
            src="https://i.ibb.co/mVx2Zf0m/images.jpg"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button onClick={handleSignOut} className="btn">
              SignOut
            </button>
          ) : (
            <Link to="/register" className="btn">
              Register
            </Link>
          )}
        </div>
        {/* image with drop down */}
        <div className="dropdown">
          <div tabIndex={0} role="button">
            <img className="rounded-full" src={user?.photoURL} alt="" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/myReview">My Review</NavLink>
            </li>
            <li>
              <NavLink to="/myFavorite">My Favorite</NavLink>
            </li>
            <li>
              <NavLink to="/postReview">Add Review</NavLink>
            </li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/profile">My Profile</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        </div>
        <div>
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
