import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../Authcontext/AuthContext';

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn, user, handleLogout } = useContext(UserContext);

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full bg-gray-200">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">House Rent</h1>
      </Link>

      <div>
        {isLoggedIn ? (
          <div className="flex items-center">
            <p className="text-white pr-4">{user.email}</p>
            {user.role === 'House Owner' && (
              <Link to="/dashboard">
                <button className="bg-blue-600 px-6 py-2 rounded cursor-pointer text-white mr-5">
                  Dashboard
                </button>
              </Link>
            )}
            <button
              onClick={handleLogoutClick}
              className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/login">
              <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white mr-5">Sign In</button>
            </Link>
            <Link to="/register">
              <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
