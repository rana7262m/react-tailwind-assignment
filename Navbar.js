import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-primary text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Logo</h1>
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          <button className="focus:outline-none">☰</button>
        </div>
        <ul className="hidden md:flex gap-6">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
      {open && (
        <ul className="md:hidden mt-2 space-y-2">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
