import React  from "react";
import {useEffect} from "react";
import jwt_decode from "jwt-decode";
import {useNavigate} from "react-router-dom";



const google = window.google;

function Googlelogin(){
    let navigate = useNavigate();

   
    function handleCallBackResponse(response){
        console.log("encoded JWT ID token" + response.credential);
        var userObject = jwt_decode(response.credential);
        console.log(userObject);
        console.log(userObject.email_verified); 
        
      
        document.getElementById("signInDiv").hidden = true;
        localStorage.setItem(userObject.email_verified,true);
        navigate("/home");
        }
        
      
        
    useEffect(()=>{
        google.accounts.id.initialize({
            client_id:"709142634878-6grasims5s10p74suut1tfgvvvr6c7s0.apps.googleusercontent.com",
            callback: handleCallBackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme: "outline", size : "large"}
        )
       
    }, []);
    

   
    return (
        <div>
       
            <div id="signInDiv"></div>
            
       
      </div> 
   
    );
}


export default Googlelogin;