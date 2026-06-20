import React from 'react';


const cardStyle = {
    backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px"

}

const TipsForCook = () => {
    return (
        <div style={cardStyle} className='flex flex-col items-center space-y-5'>
           <div className='bg-amber-200 p-3 lg:w-200 rounded-2xl space-y-2'>
            <p className='text-2xl font-bold'>Boiling Eggs</p>
            <p>ডিম সেদ্ধ করার সময় পানিতে সামান্য লবণ দিলে ডিম ফেটে যাওয়ার সম্ভাবনা কমে।</p>
           </div>
           <div  className='bg-amber-200 p-3  lg:w-200 rounded-2xl space-y-2'>
            <p className='text-2xl font-bold'>Cutting Onions</p>
            <p>পেঁয়াজ কাটার আগে 10 মিনিট ফ্রিজে রাখলে চোখে কম জ্বালা করবে।</p>
           </div>
           <div  className='bg-amber-200 p-3  lg:w-200 rounded-2xl space-y-2'>
            <p className='text-2xl font-bold'>Perfect Rice</p>
            <p>ভাত রান্নার পর 5 মিনিট ঢেকে রাখলে দানাগুলো আরও ঝরঝরে হয়।</p>
           </div>
           <div  className='bg-amber-200 p-3 lg:w-200 rounded-2xl space-y-2'>
            <p className='text-2xl font-bold'>Juicy Meat</p>
            <p>রান্নার আগে 15–20 মিনিট মাংস room temperature-এ রাখলে সমানভাবে রান্না হয়।</p>
           </div>
           <div  className='bg-amber-200 p-3 lg:w-200 rounded-2xl space-y-2'>
            <p className='text-2xl font-bold'>More Flavor</p>
            <p>রসুন বেশি সময় ভাজলে তেতো হয়ে যেতে পারে, তাই হালকা সোনালি হওয়া পর্যন্ত ভাজুন।</p>
           </div>
           <div  className='bg-amber-200 p-3 lg:w-200 rounded-2xl space-y-2'>
            <p className='text-2xl font-bold'>Fresh Salad</p>
            <p>পরিবেশনের ঠিক আগে dressing যোগ করুন, এতে সালাদ কচকচে থাকবে।</p>
           </div>
        </div>
    );
};

export default TipsForCook;