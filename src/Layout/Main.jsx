import React from 'react';
import { Outlet } from 'react-router-dom';
import AllComponent from '../AllComponet/AllComponent';

const Main = () => {
  return (
    <div>
      <AllComponent></AllComponent>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;