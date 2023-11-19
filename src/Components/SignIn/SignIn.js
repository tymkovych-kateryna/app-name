import "./SignIn.scss";

import axios from 'axios'
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
function SignIn() {
  
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  
  const [errors,setErrors] = useState({})
  const [valid,setValid] = useState(true)
  const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    let validationErrors = {}
    if(formData.username === "" ||formData.username === null ){
        isvalid = false;
        validationErrors.username = "First name required"
    }
    if(formData.password === "" ||formData.password === null ){
      isvalid = false;
      validationErrors.password = "Password name required"
  } 


  setErrors(validationErrors);
  setValid(isvalid);
  if(Object.keys(validationErrors).length === 0){
    axios.post("http://localhost:8000/users" , formData)
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  }
  
  return (

    <div>
      <Navbar />
      <div class="login-page">
        <div class="form">
          <form class="login-form" id="login-form" onSubmit={handleSubmit} >
            {/* {
              valid ? <></> : 
              <span>
                {errors.username}; {errors.password};
              </span>
            } */}
            <div className="input-group">
                  <input name="username" type="text" className="input" onChange={(event)=> setFormData({...formData, username: event.target.value})} required/>
                  <label className="label" for="username">UserName</label>
            </div>
            <div className="input-group">
                  <input name="password" type="password" className="input" onChange={(event)=> setFormData({...formData, password: event.target.value})}required/>
                  <label className="label" for="username">PassWord</label>
            </div>
            <button>login</button>
            <p class="message">
              Not registered? <a href="/signup">Create an account</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
