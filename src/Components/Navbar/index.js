import { useState } from "react";

import frog from "../../images/frog.png";
import message from "../../images/messag.png";

import "./Navbar.scss";

function Navbar({ data }) {
  let username = localStorage.getItem("username");
  let statuslogin = localStorage.getItem("button-click") === "true";
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        <li>
          <span>{username}</span>
        </li>
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
