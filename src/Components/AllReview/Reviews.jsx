import React, { use } from "react";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const Reviews = ({ singleReview }) => {
  const { foodImage, restaurantName, _id, foodName, rating, reviewerName } =
    singleReview;

    const {user} = use(AuthContext)

  const favoritePostData = {
    foodImage: foodImage,
    foodName: foodName,
    restaurantName: restaurantName,
    currentDate: new Date().toISOString().split("T")[0],
    userEmail: user?.email,
    postedBy: reviewerName,
  };

  const handleAddFavorite = () => {
    fetch("https://khabar-katha-server.vercel.app/favorite", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(favoritePostData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Favorite Food Added");
      });
  };

  return (
    <div className=" p-3">
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Food Name : {foodName}</h2>
          <div className="flex items-center">
            <p>Restaurant : {restaurantName}</p>
            <button
              onClick={handleAddFavorite}
              className="btn bg-red-500 text-white"
            >
              Add Favorite
            </button>
            <Link
              to={`/foodDetails/${_id}`}
              className="btn bg-red-500 text-white"
            >
              View Details
            </Link>
          </div>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={star <= rating ? "text-yellow-500" : "text-gray-300"}
              />
            ))}
          </div>
        </div>
        <figure>
          <img
            className="w-[400px] h-[300px]"
            src={foodImage}
            alt="FoodImage..."
          />
        </figure>
      </div>
    </div>
  );
};

export default Reviews;
