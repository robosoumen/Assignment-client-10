import React, { use, useState } from "react";
import Reviews from "./Reviews";
import { Link } from "react-router";

const AllReview = ({ allReviewPromise }) => {
  const allReviewData = use(allReviewPromise);
  const [newData, setNewData] = useState(allReviewData)
  const [loading, setLoading] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault()
        const search = e.target.search.value;
        setLoading(true)

        fetch(`https://khabar-katha-server.vercel.app/search?search=${search}`)
        .then(res => res.json())
        .then(data => {
            setNewData(data)
            setLoading(false)
        })
    }
  return (
    <div className="my-5 space-y-9">
      <div className="">
        <form className="flex justify-center gap-4" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search By Name"
            className="input input-primary"
            name="search"
          />
          <button className="btn bg-amber-600 text-white">{loading ? 'searching..':'search'}</button>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5">
        {newData.map((singleReview) => (
          <Reviews key={singleReview._id} singleReview={singleReview}></Reviews>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to='/allCard' className="btn btn-primary">Show All Review</Link>
      </div>
    </div>
  );
};

export default AllReview;
