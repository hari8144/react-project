import React from 'react';
import  ReactDOM  from "react-dom/client";

function Register() {
  return (
    <>
     <div className="container">
      <div className="center">
          <h1>Register</h1>
          <form action="" method="POST">
              <div className="txt_field">
                  <input type="text" name="text" required/>
                  <span></span>
                  <label>NAME</label>
              </div>
              <div className="txt_field">
                  <input type="email" name="email" required/>
                  <span></span>
                  <label>EMAIL</label>
                  </div>
                  <div className="txt_field">
                  <input type="number" name="number" required/>
                  <span></span>
                  <label>NUMBER</label>
               </div>
               <div className="radio-button">
                <input type="radio" name="gender"required/>
                <span>MALE</span>
                <input type="radio" name="gender"required/>
                <span>FEMALE</span>
                </div>           
              <input className="submit" type="Submit" value="login"/>

             <input className="submit" type="submit" value="submit"/>
              
          </form>
      </div>
    </div>  
    
    </>
  );
}

export default Register;