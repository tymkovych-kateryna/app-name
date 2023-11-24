import "./SignIn.scss";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  
  
  const [errors,setErrors] = useState({})
  const [valid,setValid] = useState(true)
  const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    let validationErrors = {}
    if(formData.email === "" ||formData === null ){
        isvalid = false;
        validationErrors.username = "Email required"
    }
    if(formData.password === "" ||formData.password === null ){
      isvalid = false;
      validationErrors.password = "Password name required"
  } 


  setErrors(validationErrors);
  setValid(isvalid);
  // if(Object.keys(validationErrors).length === 0){
    axios.get("http://localhost:8000/users")
    .then(result => {
      result.data.map(user =>{

        if(user.email===formData.email){
          if(user.password === formData.password){
            navigate("/");          }
          else{
            alert("wrong data");
            isvalid=false;
            validationErrors.password="Wrong password";
          }

        }
        else if(formData.email !== ""){
          isvalid=false;
          validationErrors.email="Wrong email";
        }
        setErrors(validationErrors);
        setValid(isvalid);
        
    })

    })
    .catch(err => console.log(err))
  // }

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
                  <input name="username" type="text" className="input" onChange={(event)=> setFormData({...formData, email: event.target.value})} required/>
                  <label className="label" for="email">Email</label>
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
