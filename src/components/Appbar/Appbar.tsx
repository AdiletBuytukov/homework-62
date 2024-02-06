import React from 'react';
import {NavLink} from "react-router-dom";

const Appbar: React.FC = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-info'>
      <div className='container-fluid'>
        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
          <li className='nav-item'>
            <NavLink to='/' className='navbar-brand'>Home</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/aboutUs' className='navbar-brand'>About</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/Contacts' className='navbar-brand'>Contacts</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/Cars' className='navbar-brand'>Cars</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Appbar;