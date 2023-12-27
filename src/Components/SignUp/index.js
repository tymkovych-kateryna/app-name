import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

import Navbar from "../Navbar";

function SignUp() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    let validationErrors = {};

    if (formData.username === "" || formData.username === null) {
      isvalid = false;
      // validationErrors.username = "First name required";
      validationErrors.username = `${t("usernameRequired")}`;
    }

    if (formData.password === "" || formData.password === null) {
      isvalid = false;
      // validationErrors.password = "Password required";
      validationErrors.password = `${t("passworRequired")}`;
    }

    setErrors(validationErrors);
    setValid(isvalid);

    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("http://localhost:8000/users", formData)
        .then((result) => {
          console.log(result);
          navigate("/signin");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <Navbar />
      <div class="login-page">
        <div class="form">
          <form class="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                name="username"
                type="text"
                className="input"
                onChange={(event) =>
                  setFormData({ ...formData, username: event.target.value })
                }
                required
              />
              <label className="label" for="username">
                UserName
              </label>
            </div>
            <div className="input-group">
              <input
                name="password"
                type="password"
                className="input"
                onChange={(event) =>
                  setFormData({ ...formData, password: event.target.value })
                }
                required
              />
              <label className="label" for="username">
                PassWord
              </label>
            </div>
            <div className="input-group">
              <input
                name="email"
                type="email"
                className="input"
                onChange={(event) =>
                  setFormData({ ...formData, email: event.target.value })
                }
                required
              />
              <label className="label" for="email">
                Email
              </label>
            </div>

            {/* <button>Register</button> */}
            <button>{t("registerText")}</button>
            <p class="message">
              {/* Already registered? <a href="/signin">Sign In</a> */}
              {t("alreadyRegistered")}
              <a href="/signin">{t("signIn")}</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
