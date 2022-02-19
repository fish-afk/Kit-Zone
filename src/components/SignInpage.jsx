import React from 'react'
import Auth from "../signincomponents/auth";
import Dashboard from "../signincomponents/dashboard";
import { useUserContext } from "../Usercontext/usercontext";
import Socials_area from "./Home_page/socials_area"

export default function SignInpage() {

    const { user, loading, error } = useUserContext();
    if(error.length > 0){
        alert(error);
        
    }
    
    return (
        
        <React.Fragment>
        
        <div>
            <br/>
        <div className="container bg-dark mt-5 text-white login-color text-center">
            
        {error && <p className="error text-warning fw-bold"><br/><br/>{error}</p>}
        {loading ? <h2 className="mt-5 text-success"><br/><br/>Loading...</h2> : <> {user ? <Dashboard /> : <Auth />} </>}
        
        </div>
        </div>
        
        <div className="container-fluid container-wave">
        <div className="wave"></div>
        
        </div>
        <Socials_area />
        
        
        
        </React.Fragment>
    );
}
