import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 px-4">
        <h1 className="text-8xl md:text-9xl font-extrabold text-error">404</h1>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-center">
          Oops! Page Not Found
        </h2>

        <p className="mt-3 text-center text-base-content/70 max-w-md">
          The page you are looking for might have been removed, renamed, or is
          temporarily unavailable.
        </p>

        <img
          src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
          alt="404"
          className="w-52 my-8"
        />

        <Link to="/" className="btn btn-primary">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
