import React, { use } from 'react';
import SingleCard from './SingleCard';

const AllCard = ({allCardData}) => {
    const cardData = use(allCardData);
    return (
       <div>
        <p className='text-center bg-blue-600 text-white font-bold text-3xl p-4'>{cardData.length} Review Posted</p>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5">
            {
                cardData.map(data => <SingleCard key={data._id} data={data}></SingleCard>)
            }
        </div>
       </div>
    );
};

export default AllCard;