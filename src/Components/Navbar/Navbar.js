import "./Navbar.scss";
import notification from '../../images/notification.png';
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

function Navbar() {
  const SignIn = () => {
    window.location.href = "/signin";
  };

  const SignUp = () => {
    window.location.href = "/signup";
  };

  return (
    <section className="top-nav">
      <div>
        <a href="/#">PM</a>
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        {/* <li>One</li>
      <li>Two</li> */}
        <li>
          {/* // TODO: добавити іконку для чату
            */}
          <div className="icons">
            <div className="icon">
              <img src={notification} alt="smth" className="iconImg" />
              <div className="counter">2</div>
            </div>
          </div>
        </li>
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
          <button id="sign-up" className="custom-btn btn-3" onClick={SignUp}>
            <span>Sign up</span>
          </button>
          <span className="span-sign-up">
            <a href="/signup">Sign up</a>
          </span>
        </li>
      </ul>
    </section>
  );
}

export default Navbar;
