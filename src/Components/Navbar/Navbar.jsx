import React, { use, useEffect, useState } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router";
import { HiH1 } from "react-icons/hi2";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

  useEffect(()=>{
     const html = document.querySelector('html');
      html.setAttribute("data-theme",theme);
      localStorage.setItem("theme",theme)
  },[theme])

  const handleTheme = (checked) => {
   setTheme(checked ? "dark" : "light")
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
      <li>
        <NavLink to="/postReview">Add Review</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/myReview">My Review</NavLink>
          </li>
          <li>
            <NavLink to="/myFavorite">My Favorite</NavLink>
          </li>
        </>
      )}
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
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            {user ? user.displayName : <p>Food Zone</p>}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
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
        <div>
         <input onChange={(e) => handleTheme(e.target.checked)} type='checkbox' defaultChecked={localStorage.getItem('theme') === 'dark'} className='toggle'></input>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
