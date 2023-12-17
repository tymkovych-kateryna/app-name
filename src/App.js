import React from 'react';
import frog from './images/frog.png';

import BoardContent from './Components/BoardContent/BoardContent';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <div className="trello-container">
        <Navbar/>
        <BoardContent/>
     
    </div>
  );
}

export default App;
