import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import AllCard from './AllCard';

const AllCardPage = () => {
    const allCardData = fetch('http://localhost:3000/allCard').then(res => res.json());
    console.log('all card data is', allCardData)
    return (
        <div>
            <Suspense fallback={<span className="loading loading-dots loading-xl flex mx-auto"></span>}>
                <AllCard allCardData={allCardData}></AllCard>
            </Suspense>
        </div>
    );
};

export default AllCardPage;