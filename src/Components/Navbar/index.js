import { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import frog from "../../images/frog.png";
import message from "../../images/messag.png";
import glass from "../../images/magnifying-glass.png";

import "./Navbar.scss";

function Navbar({ data }) {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const changeLanguageButton = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === "en" ? "uk" : "en";
    i18n.changeLanguage(newLanguage);
  };

  const [showInput, setShowInput] = useState(false);
  let username = localStorage.getItem("username");
  let statuslogin = localStorage.getItem("button-click") === "true";
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      performSearch();
    }
  };

  const performSearch = (e) => {
    // e.preventDefault();
    axios
      .get("http://localhost:8000/boards")
      .then((response) => {
        const fetchedData = response.data;

        const allColumns = fetchedData.reduce((acc, board) => {
          return [...acc, ...board.columns];
        }, []);
        const columnTitles = allColumns.map((column) => column.title);

        const foundColumn = columnTitles.find((title) => title === searchQuery);

        if (foundColumn) {
          alert(`Column with title "${searchQuery}" found!`);
        } else {
          alert(`Column with title "${searchQuery}" not found!`);
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });
    setSearchQuery("");
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
        <button onClick={changeLanguageButton} className="changeLngBtn">
          Eng/Uk
        </button>
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
                {/* <span>Sign in</span> */}
                <span>{t("signIn")}</span>
              </button>
              <span className="span-sign-in">
                <a href="/signin" id="signin">
                  {/* Sign in */}
                  {t("signIn")}
                </a>
              </span>
            </li>
            <li>
              <button
                id="sign-up"
                className="custom-btn btn-3"
                onClick={SignUp}
              >
                {/* <span>Sign up</span> */}
                <span>{t("signUp")}</span>
              </button>
              <span className="span-sign-up">
                <a href="/signup">
                  {/* Sign up */}
                  {t("signUp")}
                </a>
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
                  <img
                    src={glass}
                    className="magnific-glass"
                    alt="Magnifying Glass"
                  />
                )}
              </div>
              {showInput && (
                <input
                  type="text"
                  // placeholder="Введіть текст"
                  placeholder={t("enterText")}
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
                  {/* <span>Log out</span> */}
                  <span>{t("logOut")}</span>
                </button>
                <span className="span-sign-in">
                  <a href="/signin" id="signin">
                    {/* Sign in */}
                    {t("signIn")}
                  </a>
                </span>

                {/* <span>Log out</span> */}
                <span>{t("logOut")}</span>
              </button>
              <span className="span-sign-in">
                <a href="/signin" id="signin">
                  {/* Sign in */}
                  {t("signIn")}
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
