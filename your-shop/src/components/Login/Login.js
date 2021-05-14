import React, { useContext  } from 'react';
import './Login.css'
import facebook from './../icons/facebook.png'
import google from './../icons/google.png'
import firebaseConfig from './firebase.config';
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import { UserContaxt } from '../../App';
import { useHistory, useLocation } from 'react-router';
// Add the Firebase products that you want to use

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }



 
const Login = () => {
    const {userDetails, setUserDetails} = useContext(UserContaxt);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
 
 
    const handleGoogleLogin = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        
    
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                  const user = result.user;
                  setUserDetails(user)
                  if(userDetails){
                    history.replace(from);
                }
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                console.log("code error", errorCode, "error message", errorMessage);
                
            });
    }



    return (
        <div className="container mt-5">
            <div className="row">

                <div className="col-md-3"></div>

                <div className="col-md-6">
                    <form className="login-form  p-5">
                        <div className="mb-3">
                            <label  className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="inter your email" required />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label   className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="inter your password" required />
                            <div id="emailHelp" className="form-text"> your'll never share your password with anyone else.</div>
                        </div>
                        <button style={{ width: '100%' }} type="submit" className="btn btn-primary">LOGIN</button>
                    </form>
                    <br />
                  <hr></hr>

                    <div className="px-5 py-3">
                        <div className="loginWithFacebook">
                            <button className="button" type="submit"> <img className="me-3" src={facebook} alt='' /> Continue with Facebook</button>
                        </div>
                        <br />
                        <div className="loginWithGoogle">
                            <button onClick={handleGoogleLogin} className="button" type="submit"><img className="me-5 " src={google} alt='' />Continue with Google</button>
                        </div>
                    </div>


                </div>
                <div className="col-md-3"></div>
            </div>
        </div>

    );
};

export default Login;