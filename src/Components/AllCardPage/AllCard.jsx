import React, { use } from 'react';
import SingleCard from './SingleCard';

const AllCard = ({allCardData}) => {
    const cardData = use(allCardData) ;
    console.log('card data is is is ', cardData)
    return (
       <div>
        <p>{cardData.length}</p>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5">
            {
                cardData.map(data => <SingleCard data={data}></SingleCard>)
            }
        </div>
       </div>
    );
};

export default AllCard;