import React from 'react';
import HeaderContent from './Components/HeaderContent/HeaderContent';
import Bodycontent from './components/Bodycontent/Bodycontent';

function App() {
  return (
    <div id="wrapper">
      <HeaderContent />
      <Bodycontent></Bodycontent>
      <Bodycontent>
        <button>click here</button>
      </Bodycontent>

      <Bodycontent>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eum! Voluptas commodi ad debitis magnam quaerat nobis esse voluptatum eveniet? Ullam, aut! Voluptatibus beatae pariatur est quaerat nisi expedita quia.</p>
      </Bodycontent>
    </div>
  );
}

export default App;
