import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <nav>
      <Link to="/">Анкеты</Link>
      <Link to="/results">Результаты</Link>
      <button onClick={handleLogout}>Выйти</button>
    </nav>
  );
};

export default Navbar;
