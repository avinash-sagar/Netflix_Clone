import React from 'react'
import "./Home.css"
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Signup/firebase';
export const Home = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")
    const backgroundUrl = "https://images.unsplash.com/photo-1627873649417-c67f701f1949?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

    const auth = getAuth(app);
    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                localStorage.setItem("id", email)
                window.location.href = "/movies"
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode.slice(5), " Check email or Password");
            });
    }
    return (
        <div style={{
            backgroundSize: "cover",
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5) ),
            url(${backgroundUrl})`,
            backgroundPosition: 'center center',
            height: '100vh',
            fontSize: '50px',
            backgroundRepeat: 'no-repeat',
        }}  >
            <div className='details_container' >
                <div className='text_container' >
                    <h3>Ultimited movies, TV shows and more.</h3>
                    <h5>Watch anywhare, Cancel anytime.</h5>
                    <h6>Ready to watch? Enter your email to create or restart your membership</h6>
                </div>

                <div>
                    <input
                        type="email"
                        value={email}
                        className='text-input1'
                        placeholder='Email address'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        className='text-input1'
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button onClick={signIn} className='submit_btn1'>{"Get Started >"} </button>
                </div>
            </div>
        </div>
    )
}
