import React, { Suspense } from 'react';
import AllReview from '../AllReview/AllReview';

const Home = () => {
    const allReviewPromise = fetch('http://localhost:3000/allReview').then(res => res.json())
    console.log(allReviewPromise)
    return (
        <div className='w-11/12 mx-auto'>
            <p>Home page</p>
            <Suspense fallback={<h1>Loading.............</h1>}>
                 <AllReview allReviewPromise={allReviewPromise}></AllReview>
            </Suspense>
        </div>
    );
};

export default Home;