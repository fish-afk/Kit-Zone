import React from 'react'
import Auth from "../signincomponents/auth";
import Dashboard from "../signincomponents/dashboard";
import { useUserContext } from "../Usercontext/usercontext";
import Socials_area from "./Home_page/socials_area"
import Skeleton, {SkeletonTheme } from 'react-loading-skeleton'

export default function SignInpage() {

    const { user, loading, error } = useUserContext();
    if(error.length > 0){
        alert(error);
        
    }
    
    return (
        <React.Fragment>
        
        <div>
            <br/>
        <div className="container bg-dark mt-5 text-white text-center">
            
        {error && <p className="error text-warning fw-bold"><br/><br/>{error}</p>}
        {loading ? <SkeletonTheme animation="wave" baseColor="#ffffff" highlightColor="#8888"><Skeleton amount={1} height="60vh"/>
    <Skeleton /><Skeleton /> <Skeleton />
   </SkeletonTheme> : <> {user ? <Dashboard /> : <Auth />} </>}
        
        </div>
        </div>
        
        <div className="container-fluid container-wave">
        <div className="wave"></div>
        
        </div>
        <Socials_area />
        
        
        
        </React.Fragment>
    );
}
