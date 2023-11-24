import "./SignUp.scss";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
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
    axios.post("http://localhost:8000/users",formData)
    .then(result => {
      console.log(result);
      navigate("/signin");
    })
    .catch(err => console.log(err))
  
  }

  }

    return (
        <div>
      <Navbar />
      <div class="login-page">
        <div class="form">
          
          <form class="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
                  <input name="username" type="text" className="input" onChange={(event)=> setFormData({...formData, username: event.target.value})} required/>
                  <label className="label" for="username">UserName</label>
            </div>
            <div className="input-group">
                  <input name="password" type="password" className="input" onChange={(event)=> setFormData({...formData, password: event.target.value})} required/>
                  <label className="label" for="username">PassWord</label>
            </div>
            <div className="input-group">
                  <input name="email" type="email" className="input" onChange={(event)=> setFormData({...formData, email: event.target.value})} required/>
                  <label className="label" for="email">Email</label>
            </div>
            
            <button>Register</button>
            <p class="message">
                 Already registered? <a href="/signin">Sign In</a>
               </p>
          </form>
        </div>
      </div>
    </div>
    
    );
  }
  export default SignUp;