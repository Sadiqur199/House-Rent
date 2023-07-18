import React, { useState, createContext } from 'react';

const UserContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    // Perform login logic here
    setUser(userData);
    setLoggedIn(true);
  };


  const handleLogout = () => {
    // Perform logout logic here
    setUser(null);
    setLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, user, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export { AuthProvider, UserContext };
