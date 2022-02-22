import React, { useRef } from "react";
import { useUserContext } from "../Usercontext/usercontext";

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email){
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      }).catch((err)=> {
        alert(err.message);
      })}
      else{
        alert("Enter your email first");
      };
  };

  return (
    <div className="form mx-4">
        <br/>
        <br/>
        <br/>
        <br/>
      <h2> Login </h2>
      <form onSubmit={onSubmit}>
        <input required placeholder="Email" type="email" ref={emailRef} />
        <input required placeholder="Password" type="password" ref={psdRef} />
        <button type="submit">Sign In</button>
        <p onClick={forgotPasswordHandler}>Forgot Password?</p>
      </form>
    </div>
  );
};

export default Signin;