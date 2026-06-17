import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyReview = () => {
  const { user } = use(AuthContext);
  const [userData, setUserData] = useState([]);
  console.log(userData);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/userReview?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("userData of review", data);
          setUserData(data);
        });
    }
  }, [user]);

  const handleDeleteReview = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed)
        fetch(`http://localhost:3000/userReview/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after delete data", data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            //   sathe sathe update 
            const remainingReview = userData.filter(data => data._id !== _id);
            setUserData(remainingReview)
            }
          });
    });
  };
  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Name</th>
                <th>Restaurant</th>
                <th>Date of Post</th>
                <th>Edit</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {userData.map((userSingleData, index) => (
                <tr key={userSingleData._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={userSingleData.foodImage}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {userSingleData.foodName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{userSingleData.restaurantName}</td>
                  <td>{userSingleData.currentDate}</td>
                  <td><Link to={`/editReview/${userSingleData._id}`}>Edit</Link></td>
                  <th>
                    <button
                      onClick={() => handleDeleteReview(userSingleData._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
