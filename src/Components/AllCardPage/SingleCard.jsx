import React, { use } from "react";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const SingleCard = ({ data }) => {
  console.log("data from single card page", data);

  const { user } = use(AuthContext);
  console.log("user email from  card", user);

  const favoritePostData = {
    foodImage: data.foodImage,
    foodName: data.foodName,
    restaurantName: data.restaurantName,
    currentDate: new Date().toISOString().split("T")[0],
    userEmail: user?.email,
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
        console.log(data);
        toast.success("Favorite Food Added");
      });
  };

  return (
    <div>
      <div className=" p-3">
        <div className="card bg-base-100 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Food Name : {data.foodName}</h2>
            <div className="flex items-center">
              <p>Restaurant : {data.restaurantName}</p>
              <button
                onClick={handleAddFavorite}
                className="btn bg-red-500 text-white"
              >
                put Favorite
              </button>
              <Link
                to={`/foodDetails/${data._id}`}
                className="btn bg-red-500 text-white"
              >
                View Details
              </Link>
            </div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={
                    star <= data.rating ? "text-yellow-500" : "text-gray-300"
                  }
                />
              ))}
            </div>
          </div>
          <figure>
            <img
              className="w-[400px] h-[300px]"
              src={data.foodImage}
              alt="FoodImage..."
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
