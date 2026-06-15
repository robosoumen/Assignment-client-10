import React, { use } from 'react';
import Reviews from './Reviews';

const AllReview = ({allReviewPromise}) => {
    const allReviewData = use(allReviewPromise);
    console.log('allreview',allReviewPromise)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5'>
           {
            allReviewData.map(singleReview => <Reviews key={singleReview._id} singleReview={singleReview}></Reviews>)
           }
        </div>
    );
};

export default AllReview;