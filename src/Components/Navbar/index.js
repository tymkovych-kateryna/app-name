import { useState } from "react";
import axios from "axios";
import frog from "../../images/frog.png";
import message from "../../images/messag.png";
import glass from '../../images/magnifying-glass.png'
import "./Navbar.scss";

function Navbar({ data }) {
  const [showInput, setShowInput] = useState(false);
  let username = localStorage.getItem("username");
  let statuslogin = localStorage.getItem("button-click") === "true";
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState('');
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      performSearch();
    }
  };

  
  const performSearch = (e) => {
    // e.preventDefault();
    axios.get('http://localhost:8000/boards')
      .then(response => {
        const fetchedData = response.data;
        
        
        const allColumns = fetchedData.reduce((acc, board) => {
          return [...acc, ...board.columns];
        }, []);
        const columnTitles = allColumns.map(column => column.title);
        
        const foundColumn = columnTitles.find(title => title === searchQuery);
        
        if (foundColumn) {
          alert(`Column with title "${searchQuery}" found!`);
        } else {
          alert(`Column with title "${searchQuery}" not found!`);
        }
      })
      .catch(error => {
        console.error('Error', error);
      });
      setSearchQuery('');
  };
  const SignIn = () => {
    window.location.href = "/signin";
  };

  const SignUp = () => {
    window.location.href = "/signup";
  };
  const Chat = () => {
    window.location.href = "/chat";
  };
  const LogOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("username");
    localStorage.setItem("button-click", "true");
    window.location.reload();
  };
  return (
    <section className="top-nav">
      <div>
        <a href="/#">
          <img src={frog} alt="smth"></img>
        </a>
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>

      <ul className="menu">
        {/* <li>
          <span>{username}</span>
        </li> */}
        {/* <li>One</li>
      <li>Two</li> */}
        {statuslogin && (
          <>
            <li>
              <button
                id="sign-in"
                className="custom-btn btn-3"
                onClick={SignIn}
              >
                <span>Sign in</span>
              </button>
              <span className="span-sign-in">
                <a href="/signin" id="signin">
                  Sign in
                </a>
              </span>
            </li>
            <li>
              <button
                id="sign-up"
                className="custom-btn btn-3"
                onClick={SignUp}
              >
                <span>Sign up</span>
              </button>
              <span className="span-sign-up">
                <a href="/signup">Sign up</a>
              </span>
            </li>
          </>
        )}
        {!statuslogin && (
          <>
           <li>
          <span>{username}</span>
        </li>
        <li>
      
       <div onClick={() => setShowInput(!showInput)}>
        {showInput ? (
        
        <i className="fa fa-close icon"></i>
        ) : (
         
          <img src={glass} className="magnific-glass" alt="Magnifying Glass" />
        )}
      </div>
      {showInput && (
        <input
          type="text"
          placeholder="Введіть текст"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyPress} 
          onBlur={() => setShowInput(false)}
          
        />
      )}
        </li>
            <li>
              <div className="message">
                <a href="/chat">
                  <img src={message} className="iconImg"></img>
                </a>
                <div className="counter">2</div>
              </div>
            </li>
            <li>
              <button id="sign-in" className="custom-btn btn-3">
                <button
                  id="sign-in"
                  className="custom-btn btn-3"
                  onClick={LogOut}
                >
                  <span>Log out</span>
                </button>
                <span className="span-sign-in">
                  <a href="/signin" id="signin">
                    Sign in
                  </a>
                </span>

                <span>Log out</span>
              </button>
              <span className="span-sign-in">
                <a href="/signin" id="signin">
                  Sign in
                </a>
              </span>
            </li>
          </>
        )}
      </ul>
    </section>
  );
}

export default Navbar;
