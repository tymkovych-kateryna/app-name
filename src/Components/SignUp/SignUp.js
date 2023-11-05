import "./SignUp.scss";
import Navbar from "../Navbar/Navbar";

function SignUp() {
    return (
        <div>
      <Navbar />
      <div class="login-page">
        <div class="form">
          
          <form class="login-form">
          <div className="input-group">
                  <input type="text" className="input" required/>
                  <label className="label" for="username">UserName</label>
            </div>
            <div className="input-group">
                  <input type="password" className="input" required/>
                  <label className="label" for="username">PassWord</label>
            </div>
            <div className="input-group">
                  <input type="email" className="input" required/>
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