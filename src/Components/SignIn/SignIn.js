import "./SignIn.scss";
import Navbar from "../Navbar/Navbar";
function SignIn() {
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
