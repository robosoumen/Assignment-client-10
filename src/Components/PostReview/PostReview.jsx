import React, { use, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";
import { FaStar } from "react-icons/fa";

const PostReview = () => {
  const { user } = use(AuthContext);
  const userEmail = user?.email;
  const currentDate = new Date().toISOString().split("T")[0];

  const [rating, setRating] = useState(0);

  const handleReview = (e) => {
    e.preventDefault();
    const foodName = e.target.foodName.value;
    const foodImage = e.target.foodImage.value;
    const restaurantName = e.target.restaurantName.value;
    const location = e.target.location.value;
    const text = e.target.textArea.value;
    const reviewerName = e.target.reviewerName.value;

    const newReview = {
      foodName,
      foodImage,
      restaurantName,
      userEmail,
      currentDate,
      location,
      rating,
      text,
      reviewerName
    };

    console.log(newReview)
    console.log(foodName)
    console.log(foodImage)
    console.log(restaurantName)
    console.log(userEmail)
    console.log(currentDate)
    console.log(location)
    console.log(rating)
    console.log(text)

    fetch("http://localhost:3000/postReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after post review", data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        e.target.reset();
      });
  };
  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleReview}>
        <fieldset className="fieldset">
          <label className="label">Your Name</label>
          <input
            name="reviewerName"
            type="text"
            className="input"
            placeholder="Food Name"
            required
          />
          <label className="label">Food Name</label>
          <input
            name="foodName"
            type="text"
            className="input"
            placeholder="Food Name"
            required
          />
          <label className="label">Food Image</label>
          <input
            name="foodImage"
            type="text"
            className="input"
            placeholder="Food Image"
          />
          <label className="label">Restaurant Name</label>
          <input
            name="restaurantName"
            type="text"
            className="input"
            placeholder="Restaurant Name"
            required
          />
          <label className="label">Restaurant Location</label>
          <input
            name="location"
            type="text"
            className="input"
            placeholder="Restaurant Location"
            required
          />
          {/* text area */}
          <textarea name="textArea" rows="8" className="w-full border p-3 rounded" />
          {/* star */}
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={30}
                onClick={() => setRating(star)}
                className={`cursor-pointer ${
                  star <= rating ? "text-yellow-500" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <button className="btn btn-neutral mt-4">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default PostReview;
