import React from 'react';

const HouseCard = ({ house }) => {
  const { city, bedrooms, bathrooms, size, available, rent ,img} = house;

  return (
    <div className="bg-white p-4 rounded shadow w-[75%]">
      <img className='h-auto w-full' src={img} alt="" />
      <h2 className="text-lg font-bold mb-2">{city}</h2>
      <p>Bedrooms: {bedrooms}</p>
      <p>Bathrooms: {bathrooms}</p>
      <p>Size: {size}</p>
      <p>Availability: {available ? 'Available' : 'Not available'}</p>
      <p>Rent per month: ${rent}</p>
    </div>
  );
};

export default HouseCard;
