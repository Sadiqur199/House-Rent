import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditHouseForm = ({ houseId, fetchHouses }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
  });

  useEffect(() => {
    fetchHouseDetails();
  }, [houseId]);

  const fetchHouseDetails = async () => {
    try {
      const response = await axios.get(`/houses/${houseId}`);
      setFormData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/houses/${houseId}`, formData);
      fetchHouses();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Edit House</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="block mb-2 font-medium">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none"
          required
        />
        <label htmlFor="address" className="block mb-2 font-medium">
          Address
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none"
          required
        />
        <label htmlFor="city" className="block mb-2 font-medium">
          City
        </label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none"
          required
        />
        {/* Add other form fields here */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Update House
        </button>
      </form>
    </div>
  );
};

export default EditHouseForm;
