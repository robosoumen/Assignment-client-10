import React from "react";
import toast from "react-hot-toast";

const Reviews = ({ singleReview }) => {
  const { foodImage, restaurantName, userEmail, currentDate, _id, foodName } =
    singleReview;
  const favoritePostData = {
    foodImage: foodImage,
    foodName: foodName,
    restaurantName: restaurantName,
    currentDate: new Date().toISOString().split("T")[0],
    userEmail: userEmail,
  };

  const handleAddFavorite = () => {
    fetch("http://localhost:3000/favorite", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(favoritePostData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Favorite Food Added");
      });
  };

  return (
    <div className=" p-3">
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Restaurant Name:{restaurantName}</h2>
          <div className="flex items-center">
            <p>Food Name:{foodName}</p>
            <button
              onClick={handleAddFavorite}
              className="btn bg-red-500 text-white"
            >
              Add Favorite
            </button>
          </div>
        </div>
        <figure>
          <img className="w-[400px] h-[300px]" src={foodImage} alt="Shoes" />
        </figure>
      </div>
    </div>
  );
};

export default Reviews;
