import React, { Suspense } from 'react';
import AllReview from '../AllReview/AllReview';
import Slider from '../Slider/Slider';
import QuickRecipe from '../QuickRecipe/QuickRecipe';
import TipsForCook from '../TipsForCook/TipsForCook';



const Home = () => {
    const allReviewPromise = fetch('http://localhost:3000/allReview').then(res => res.json())
    console.log(allReviewPromise)
    return (
        <div className='w-11/12 mx-auto'>
            {/* slider */}
           <div className='mt-10'>
             <Suspense fallback={<span className="loading loading-ring loading-xl flex mx-auto my-40"></span>}> <Slider allReviewPromise={allReviewPromise}></Slider></Suspense>
           </div>
           <div>
             <Suspense fallback={<span className="loading loading-ring loading-xl flex mx-auto my-40"></span>}>
                 <AllReview allReviewPromise={allReviewPromise}></AllReview>
            </Suspense>
           </div>
           <div className='space-y-3 mb-3'>
                <p className='text-center font-bold text-3xl text-blue-600'>3 easy and quick recipe</p>
                <QuickRecipe></QuickRecipe>
           </div>
           <div className='space-y-3 mb-3'>
            <p className='text-center font-bold text-3xl text-blue-600'>Cooking Tips & Tricks</p>
            <TipsForCook></TipsForCook>
           </div>
        </div>
    );
};

export default Home;