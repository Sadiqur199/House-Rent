import React, { useState } from 'react';
import housesApi from '../../api/houses';

const SearchForm = () => {
  const [city, setCity] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const params = { city, bedrooms, bathrooms };
    const data = await housesApi.searchHouses(params);
    setSearchResults(data);
  };

  return (
    <div className="container mx-auto py-4">
      <form className="flex justify-center" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Location"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="px-2 py-1 border border-gray-300 rounded-l focus:outline-none"
        />
        <input
          type="number"
          placeholder="Bedrooms"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          className="px-2 py-1 border border-gray-300 focus:outline-none"
        />
        <input
          type="number"
          placeholder="Bathrooms"
          value={bathrooms}
          onChange={(e) => setBathrooms(e.target.value)}
          className="px-2 py-1 border border-gray-300 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none"
        >
          Search
        </button>
      </form>
      <div className="mt-4">
        {searchResults.map((house) => (
          <div key={house.id} className="border p-4 mb-4">
            <img src={house.img} className='h-[30%] w-[20%]' alt="" />
            <h3 className="text-lg font-bold">{house.title}</h3>
            <p>Location: {house.city}</p>
            <p>Bedrooms: {house.bedrooms}</p>
            <p>Bathrooms: {house.bathrooms}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchForm;
