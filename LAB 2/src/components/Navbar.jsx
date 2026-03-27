import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: 'rgb(240, 240, 240)', textAlign: 'center' }}>
      <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
      <Link to="/about"> About </Link>
      
      <Link to="/Contact"> Contact </Link>
    </nav>
  );
}

export default Navbar;

