import React from "react";
import { useUserContext } from "../Usercontext/usercontext";

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();
  return (
    <div>
        <br/>
        <br/>
      <h1 className="mb-4">Dashboard </h1>
      {user.photoURL && <img className="mb-5" src={user.photoURL} />}
      <h2 className="text-white">Name :<u> {user.displayName}</u>{ console.log(user)}</h2>
      <h2>Email : <u>{user.email}</u></h2>
      <button className="btn-danger mt-3 mb-3 px-5 py-1" onClick={logoutUser}>Log out</button>
      <h5 className="text-warning mt-5 text-start">Refresh the page if your credentials don't show up.</h5>
    </div>
  );
};

export default Dashboard;