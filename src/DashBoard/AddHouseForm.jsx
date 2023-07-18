import React, { useState } from 'react';
import axios from 'axios';

const AddHouseForm = ({ fetchHouses }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    // Add other form fields here
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/houses', formData);
      fetchHouses();
      // Clear form fields
      setFormData({
        name: '',
        address: '',
        city: '',
        // Reset other form fields here
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Add New House</h2>
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
          Add House
        </button>
      </form>
    </div>
  );
};

export default AddHouseForm;
