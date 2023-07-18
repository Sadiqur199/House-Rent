import React from 'react';
import { Outlet } from 'react-router-dom';
import AllComponent from '../AllComponet/AllComponent';
import Header from '../Navbar/Header';

const Main = () => {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
    </div>
  );
};

export default Main;