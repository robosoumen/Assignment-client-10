import React from "react";

const Reviews = ({ singleReview }) => {
  const {
    foodImage,
    restaurantName,
    userEmail,
    currentDate,
    _id,
  } = singleReview;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{restaurantName}</h2>
          <p>
           {userEmail}
          </p>
        </div>
        <figure>
          <img className="w-[400px] h-[200px]"
            src={foodImage}
            alt="Shoes"
          />
        </figure>
      </div>
    </div>
  );
};

export default Reviews;
