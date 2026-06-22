import React from "react";
import { FaStar } from "react-icons/fa6";
import { useLoaderData } from "react-router";

const FoodDetails = () => {
  const data = useLoaderData();
  return (
    <div className="w-8/12 mx-auto mt-4 mb-4 space-y-2 bg-amber-200 p-7 rounded-2xl">
      <div>
        <img className="w-full h-96 rounded-2xl" src={data.foodImage} alt="" />
      </div>
      <div className="flex justify-between">
        <div><p><span className="font-bold">Food Name</span> : {data.foodName}</p></div>
        <div><span className="font-bold">Location</span> : {data.location}</div>
      </div>
      <div>
        <p><span className="font-bold">Restaurant Name</span> : {data.restaurantName}</p>
      </div>
      <div className="flex justify-between items-center">
        <div>
            <p><span className="font-bold">Reviewer Name</span> : {data.reviewerName}</p>
        </div>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={star <= data.rating ? "text-yellow-500" : "text-gray-300"}
            />
          ))}
        </div>
      </div>
      <div>
        <p><span className="font-bold">Feedback</span> : {data.text}</p>
      </div>

    </div>
  );
};

export default FoodDetails;
