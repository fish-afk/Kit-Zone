import React from "react";
import { useUserContext } from "../Usercontext/usercontext";
import {
  sendEmailVerification,
  } from "firebase/auth";

const Dashboard = () => {
  const { user, logoutUser, deletuser } = useUserContext();
  const verified = user.emailVerified;

  const return_verification_status = () => {
    return(verified == true ? <h2 className="text-success">Email verification: Complete</h2> :
    <div id="innerhtm"><h2 className="text-danger">Email verification: InComplete<br/><br/></h2><button 
    onClick={verify_email} className="bg-info fw-bold">Verify email</button></div>)
  }

  const verify_email = () => {
    console.log()
    sendEmailVerification(user).then(() => {
      document.getElementById("innerhtm").innerHTML = `<h1 className="text-info">Check your inbox</h1>`
      alert("Email Verification has been sent!")
    }).catch((error) => {
      alert(error + "\n Please try later")
    })
  }
  return (
    <div className="container">
        <br/>
        <br/>
      <h1 className="mb-4 text-info">Dashboard </h1>
      {user.photoURL && <img className="mb-2" style={{border: "1px solid blue", borderRadius: "20px"}} src={user.photoURL} alt="user-profile-picture" />}
      <h2 className="text-white">Name :<u> {user.displayName}</u>{ console.log(user)}</h2>
      <h2>Email : <u>{user.email}</u></h2>
      {return_verification_status()}
      <button className="btn-danger mt-3 mb-3 px-5 py-1" onClick={logoutUser}>Log out</button>
      <button className="btn-danger ms-2 mt-3 mb-3 px-3 py-1" onClick={deletuser}>Delete Account</button>
      <h5 className="text-warning mt-5 text-start">Refresh the page if your credentials don't show up.</h5>
    </div>
  );
};

export default Dashboard;