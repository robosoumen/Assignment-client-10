import React, { Suspense } from 'react';
import AllReview from '../AllReview/AllReview';
import Slider from '../Slider/Slider';



const Home = () => {
    const allReviewPromise = fetch('http://localhost:3000/allReview').then(res => res.json())
    console.log(allReviewPromise)
    return (
        <div className='w-11/12 mx-auto'>
            {/* slider */}
            <Suspense fallback={<span className="loading loading-ring loading-xl flex mx-auto my-40"></span>}> <Slider allReviewPromise={allReviewPromise}></Slider></Suspense>
            <Suspense fallback={<span className="loading loading-ring loading-xl flex mx-auto my-40"></span>}>
                 <AllReview allReviewPromise={allReviewPromise}></AllReview>
            </Suspense>
        </div>
    );
};

export default Home;