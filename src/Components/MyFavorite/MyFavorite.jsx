import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

const MyFavorite = () => {
  const { user } = use(AuthContext);
  const [newData, setNewData] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("after favorite page fetch data", newData);

  useEffect(() => {
    fetch(`https://khabar-katha-server.vercel.app/my-favorite?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setNewData(data);
        setLoading(false);
      });
  }, [user]);

  const handleDelete = (_id) => {
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
        fetch(`https://khabar-katha-server.vercel.app/delete/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              //   sathe sathe update
              const remainingReview = newData.filter(
                (data) => data._id !== _id,
              );
              setNewData(remainingReview);
            }
          });
    });
  };

  if (loading) {
    return <h1>favorite Page Loading................</h1>;
  }
  return (
    <div>
      <p>My Favorite</p>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Name</th>
                <th>Restaurant Name</th>
                <th>Date</th>
                <th>Post By</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {newData.map((data, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={data.foodImage}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{data.foodName}</div>
                      </div>
                    </div>
                  </td>
                  <td>{data.restaurantName}</td>
                  <td>{data.currentDate}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">
                      {data.userEmail}
                    </button>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDelete(data._id)}
                      className="btn btn-xs"
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

export default MyFavorite;
