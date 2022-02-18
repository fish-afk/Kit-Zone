import React from 'react'
import Auth from "../signincomponents/auth";
import Dashboard from "../signincomponents/dashboard";
import { useUserContext } from "../Usercontext/usercontext";
import Socials_area from "./Home_page/socials_area"

export default function SignInpage() {

    const { user, loading, error } = useUserContext();
    
    return (
        
        <React.Fragment>
        <div className="container-fluid login-color mt-5 text-white">
            
        {error && <p className="error">{error}</p>}
        {loading ? <h2>Loading...</h2> : <> {user ? <Dashboard /> : <Auth />} </>}
        
        </div>
        <img src="https://wallpaperaccess.com/full/1567666.png" style={{backgroundrepeat:"cover", width:"100%"}}></img>
        <Socials_area/>
        
        </React.Fragment>
    );
}
