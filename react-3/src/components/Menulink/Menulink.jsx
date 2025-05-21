import React from 'react';
import './Menulink.css';

function Menulink({ name, href }) {
  return (
    <a href={href} className="link">
      {name}
    </a>
  );
}

export default Menulink;
