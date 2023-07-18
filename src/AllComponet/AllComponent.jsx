import React from 'react';
import Home from '../Component/Home';
import Header from '../Navbar/Header';
import SearchForm from '../Component/SearchForm/SearchForm';

const AllComponent = () => {
  return (
    <div>
      <SearchForm></SearchForm>
      <Home></Home>
    </div>
  );
};

export default AllComponent;