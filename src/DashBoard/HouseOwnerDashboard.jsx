import React, { useState } from 'react';
import HouseList from './HouseList';
import AddHouseForm from './AddHouseForm';

const HouseOwnerDashboard = () => {
  const [isAddHouseOpen, setIsAddHouseOpen] = useState(false);

  const handleAddHouseOpen = () => {
    setIsAddHouseOpen(true);
  };

  const handleAddHouseClose = () => {
    setIsAddHouseOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">House Owner Dashboard</h1>
      <button
        onClick={handleAddHouseOpen}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
      >
        Add New House
      </button>
      {isAddHouseOpen && <AddHouseForm fetchHouses={fetchHouses} onClose={handleAddHouseClose} />}
      <HouseList />
    </div>
  );
};

export default HouseOwnerDashboard;
