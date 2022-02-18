import React from "react";
import { useUserContext } from "../Usercontext/usercontext";

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();
  return (
    <div>
        <br/>
        <br/>
      <h1>Dashboard </h1>
      {user.photoURL && <img className="m-4" src={user.photoURL} />}
      <h2>Name : {user.displayName}</h2>
      <h2>Email : {user.email}</h2>
      <button className="btn-danger mt-3 mb-3 px-5" onClick={logoutUser}>Log out</button>
    </div>
  );
};

export default Dashboard;