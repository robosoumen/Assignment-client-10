import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

const PostReview = () => {
  const { user } = use(AuthContext);
  const userEmail = user?.email;
  const currentDate = new Date().toISOString().split("T")[0];
  

  const handleReview = (e) => {
    e.preventDefault();
    const foodName = e.target.foodName.value;
    const foodImage = e.target.foodImage.value;
    const restaurantName = e.target.restaurantName.value;
   

    const newReview = {
      foodName,
      foodImage,
      restaurantName,
      userEmail,
      currentDate,
    };

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
        e.target.reset()
      });
  };
  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleReview}>
        <fieldset className="fieldset">
          <label className="label">Food Name</label>
          <input
            name="foodName"
            type="text"
            className="input"
            placeholder="Food Name"
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
          />
          <button className="btn btn-neutral mt-4">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default PostReview;
