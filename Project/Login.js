import React from "react";
import  ReactDOM  from "react-dom/client";

function Login() {
  return (
    <>
    <div className="container">
      <div className="center">
          <h1>Login</h1>
          <form action="" method="POST">
              <div className="txt_field">
                  <input type="text" name="text" required/>
                  <span></span>
                  <label>USERNAME</label>
              </div>
              <div className="txt_field">
                  <input type="password" name="text" required/>
                  <span></span>
                  <label>Password</label>
                  </div>
                
              <div className="pass">Forget Password?</div>
              <input className="submit" type="Submit" value="Login"/>
              <div className="signup_link">
                  Not a Member ? <a href="signup.php">Signup</a>
              </div>
          </form>
      </div>
    </div>  
    </>
  );
}

export default Login;