import React, { use, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

// laptop charge 12:21 pm
// 2:18am

const EditReview = () => {

  const data = useLoaderData();
  console.log(data);

  const handleDeleteReview = (e) => {
    e.preventDefault();
    const foodName = e.target.foodName.value;
    const foodImage = e.target.foodImage.value;
    const restaurantName = e.target.restaurantName.value;
    console.log(foodImage, foodName, restaurantName)

    const editedReview = { foodImage, foodName, restaurantName };

    // update kora
    fetch(`http://localhost:3000/userReview/${data._id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(editedReview)
    })
    .then(res => res.json())
    .then(data => {
        console.log('after update review data is',data);
        if(data.modifiedCount){
            alert('update successful')
        }
    })
  };

  return (
    <div>
      <p>edit review</p>
      <div>
        <form onSubmit={handleDeleteReview}>
          <fieldset className="fieldset">
            {/* food name */}
            <label className="label">Food Name</label>
            <input name="foodName" type="text" className="input" defaultValue={data.foodName} />
            {/* food image */}
            <label className="label">Food Image</label>
            <input name="foodImage" type="text" className="input" defaultValue={data.foodImage} />
            {/* restaurant name */}
            <label className="label">Restaurant Name</label>
            <input name="restaurantName" type="text" className="input" defaultValue={data.restaurantName} />
            <button className="btn btn-neutral mt-4">Submit</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default EditReview;
