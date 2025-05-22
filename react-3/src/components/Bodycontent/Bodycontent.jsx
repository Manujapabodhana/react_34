import React from 'react';
import './Bodycontent.css'; // fixed the path (no space, correct case)

function Bodycontent(props) {
  return (
    <div className="content"> {/* fixed className spelling */}
      <h3>Bodycontent</h3>
      {props.children}
    </div>
  );
}

export default Bodycontent;
