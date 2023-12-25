import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../Navbar";

import "./SignIn.scss";

function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //npx json-server --watch db.json --port 8000
  const [user, setuser] = useState("");
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const setemail = "";
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let statuslogin = localStorage.getItem("button-click") === "false";
  const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    let validationErrors = {};
    if (formData.email === "" || formData === null) {
      isvalid = false;
      validationErrors.username = "Email required";
    }
    if (formData.password === "" || formData.password === null) {
      isvalid = false;
      validationErrors.password = "Password name required";
    }

    setErrors(validationErrors);
    setValid(isvalid);
    // if(Object.keys(validationErrors).length === 0){
    axios
      .get("http://localhost:8000/users")
      .then((result) => {
        result.data.map((user) => {
          if (user.email === formData.email) {
            if (user.password === formData.password) {
              localStorage.setItem("username", formData.email);
              statuslogin = localStorage.setItem("button-click", "false");
              // setIsLoggedIn(true);
              navigate("/");
            } else {
              setIsLoggedIn(false);

              isvalid = false;
              validationErrors.password = "Wrong password";
            }
          } else if (formData.email !== "") {
            console.log("wrong password or email");

            isvalid = false;
            validationErrors.email = "Wrong email or password";
          }
          setErrors(validationErrors);
          setValid(isvalid);
        });
      })
      .catch((err) => console.log(err));
    // }
  };
  let username = localStorage.getItem("username");

  return (
    <div>
      {/* {isLoggedIn ? (
      <Navbar data={user.email}/>
      

      ) : ( */}
      <div>
        {/* <Navbar data={user.email}/> */}
        <Navbar data={username} />
        <div className="login-page">
          <div className="form">
            <form
              className="login-form"
              id="login-form"
              onSubmit={handleSubmit}
            >
              {errors.email && <p className="error-message">{errors.email}</p>}
              <div className="input-group">
                <input
                  name="username"
                  type="text"
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
              <button
                type="submit"
                className="button-click"
                onClick={() => setuser(formData)}
              >
                login
              </button>
              <p className="message">
                Not registered? <a href="/signup">Create an account</a>
              </p>
            </form>
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
}
export default SignIn;
