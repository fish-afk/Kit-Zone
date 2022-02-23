import React, { useRef, useContext, useState } from "react";
import { useUserContext } from "../Usercontext/usercontext";
import Recaptcha from "react-recaptcha"

const Signup = () => {
  const [Verify, setverify] = useState(false);

  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();

  const callback = (response) => {
    if(response){
      console.log("recaptcha loaded...")
    }else{
      return
    }
  }
  const verifycallback = (response) => {
    setverify(true);
  }
  const onSubmit = (e) => {
    e.preventDefault();

    if(Verify == true){
    
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) {
      registerUser(email, password, name)

    }
    }else if(Verify == false){
      alert("Please complete captcha")
    }
    
    
  };

  return (
    
    <div className="form">
        <br/>
    <br/>
    <br/>
        <br/>
      <h2 className="mx-4"> New User: </h2>
      <form onSubmit={onSubmit}>
        <input required placeholder="Email" type="email" ref={emailRef} className="mx-4"/>
        <input required placeholder="Name" type="name" ref={nameRef} className="mx-4"/>
        <input required placeholder="Password" type="password" ref={psdRef} className="mx-4"/>
        <button className="btn btn-success ms-3">Register</button>
        <Recaptcha
          sitekey="6LcG040eAAAAAPPkBhrS0IueBZQE-NFurLvxb0XV"
          render="explicit"
          verifyCallback={verifycallback}
          onloadCallback={callback}
        />
      </form>
    </div>
  );
};

export default Signup;