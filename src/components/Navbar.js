
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
        
          
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl">React flow </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
       
        </div>
      
      </div>
    );
};

export default Navbar;