import React, { useState } from 'react';
import './Login.css';
import { Link,useHistory } from "react-router-dom" ;
import { auth } from './firebase'; 

function Login() {
     const history = useHistory();
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

     const signIn = e => { 
         e.preventDefault();
         auth.signInWithEmailAndPassword(email, password)
         .then(auth => {
             history.push('/')
         })
         .catch(error => alert(error.message))
     }

     const registetr = e => {
         e.preventDefault();   

         auth.createUserWithEmailAndPassword(email, password)
         .then((auth) => {
             if (auth) {
                 history.push('/')
             }
         })
         .catch(error => alert(error.message))
     }

    return (
        <div className="login">
            <Link to='/'>
                <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" />
            </Link>

            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit" className="login_signInButton" onClick={signIn}>sign in </button>
                </form> 
                <p>
                By continuing, you agree to Amazon clone's Conditions of Use and Privacy Notice.
                </p>
                <button className="login_SignUpButton" onClick={registetr}>Create Amazon Account</button>
            </div>
        </div>

    )
}

export default Login