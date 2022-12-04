import React from 'react';
import { Formik } from "formik";
import './Signup.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect } from 'react';
import { useState } from 'react';
import app from './firebase';

export const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [terms, setTerms] = useState(false)

    const auth = getAuth(app);
    const signUp = () => {
        console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                alert("User successfuly created")
                localStorage.setItem("id", JSON.stringify(email))
                window.location.href = "/"
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode)
            });
    }
    return (
        <div style={{
            backgroundSize: "cover",
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8) ),
               url("https://images.unsplash.com/photo-1627873649417-c67f701f1949?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
            backgroundPosition: 'center center',
            height: '100vh',
            fontSize: '50px',
            backgroundRepeat: 'no-repeat',
            paddingTop: "100px"
        }}>
            <div className='signup' >
                <h3>Register</h3>
                <div>
                    <input
                        placeholder='Email'
                        className='text1'
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        placeholder='Password'
                        className='text1'
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className='submit_btn' onClick={signUp} >Register</button>
                    <button
                        style={{ marginTop: '-10px' }}
                        className='submit_btn'
                        onClick={() => window.location.href = "/"} >
                        Sign In
                    </button>
                    <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a
                        onClick={() => setTerms(!terms)}
                        className='anchor'>Learn more</a> .</p>
                    {
                        terms ? <p>The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).</p>
                            : null
                    }

                </div>

            </div>
        </div>
    )
}
