import React from 'react';
import frog from './images/frog.png';

function App() {
  return (
    <div className="trello-container">

      <nav className='app-navbar'>Navigation Bar</nav>
      <nav className='board-navbar'>Board Bar</nav>

      <div className='board-columns'>
        <div className='columns'>
          <header>Header</header>
          <ul>
            <li>
              <img src={frog}></img>
              First task
            </li>
            <li>Second task</li>
            <li>Third task</li>
          </ul>
          <footer>Add task</footer>
        </div>

        <div className='columns'>
          <header>Headers</header>
          <ul>
            <li>
              <img src={frog}></img>
              First task
            </li>
            <li>Second task</li>
          </ul>
          <footer>Add task</footer>
        </div>

        <div className='columns'>
          <header>Header</header>
          <ul>
            <li>
              <img src={frog}></img>
              First task
            </li>
            <li>Second task</li>
          </ul>
          <footer>Add task</footer>
        </div>

        <div className='columns'>
          <header>Header</header>
          <ul>
            <li>
              <img src={frog}></img>
              First task
            </li>
            <li>Second task</li>
          </ul>
          <footer>Add task</footer>
        </div>

        <div className='columns'>
          <header>Header</header>
          <ul>
            <li>
              <img src={frog}></img>
              First task
            </li>
            <li>Second task</li>
          </ul>
          <footer>Add task</footer>
        </div>
      </div>

    </div>
  );
}

export default App;
