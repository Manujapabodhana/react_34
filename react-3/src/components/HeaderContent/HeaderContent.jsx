import React from 'react';
import './HeaderContent.css';
import Menulink from '../Menulink/Menulink';

function HeaderContent() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="vite.svg" alt="Logo" width="30" height="30" />
      </div>
      <div className="menu">
        <Menulink name="Home" href="#home" />
        <Menulink name="About" href="#about" />
        <Menulink name="Contact" href="#contact" />
        <Menulink name="Login" href="#login" />
      </div>
    </div>
  );
}

export default HeaderContent;
