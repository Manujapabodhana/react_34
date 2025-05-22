import React from 'react';
import './Menulink.css';

function Menulink(props) {
  return (
    <>
      <a href={props.href} className='link'>{props.name}</a>
    </>
  );
}

export default Menulink;
