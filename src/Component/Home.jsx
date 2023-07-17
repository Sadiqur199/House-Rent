import React, { useEffect, useState } from 'react';
import housesApi from '../api/houses';
import HouseCard from './HouseCard/HouseCard';

const Home = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    loadHouses();
  }, []);

  const loadHouses = async () => {
    const data = await housesApi.getHouses();
    setHouses(data);
  };

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">Available Houses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {houses.map((house) => (
          <HouseCard key={house.id} house={house} />
        ))}
      </div>
    </div>
  );
};

export default Home;
