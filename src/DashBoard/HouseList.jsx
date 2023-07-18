import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HouseList = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetchHouses();
  }, []);

  const fetchHouses = async () => {
    try {
      const response = await axios.get('/houses');
      setHouses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteHouse = async (id) => {
    try {
      await axios.delete(`/houses/${id}`);
      setHouses((prevHouses) => prevHouses.filter((house) => house._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">List of Owned Houses</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">City</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((house) => (
            <tr key={house._id} className="border-b">
              <td className="py-2 px-4">{house.name}</td>
              <td className="py-2 px-4">{house.address}</td>
              <td className="py-2 px-4">{house.city}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => handleDeleteHouse(house._id)}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  Delete
                </button>
                {/* Add Edit functionality here */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HouseList;
