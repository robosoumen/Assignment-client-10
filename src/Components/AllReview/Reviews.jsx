import React from "react";

const Reviews = ({ singleReview }) => {
  const { foodImage, restaurantName, userEmail, currentDate, _id, foodName } =
    singleReview;

  return (
    <div className=" p-3">
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Restaurant Name:{restaurantName}</h2>
          <div className="flex items-center">
            <p>Food Name:{foodName}</p>
            <button className="btn bg-red-500 text-white">Add Favorite</button>
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
