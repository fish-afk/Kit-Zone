import React, { useRef } from "react";
import { useUserContext } from "../Usercontext/usercontext";

const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, password, name)
  };

  return (
    
    <div className="form">
        <br/>
    <br/>
    <br/>
        <br/>
      <h2 className="mx-4"> New User: </h2>
      <form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} className="mx-4"/>
        <input placeholder="Name" type="name" ref={nameRef} className="mx-4"/>
        <input placeholder="Password" type="password" ref={psdRef} className="mx-4"/>
        <button type="submit" className="btn btn-success ms-3">Register</button>
      </form>
    </div>
  );
};

export default Signup;