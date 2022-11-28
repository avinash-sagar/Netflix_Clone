import React from 'react'
import "./Navbar.css"
export const Navbar = ({ newRef }) => {
    const handleClick = () => {
        localStorage.clear()
        window.location.href = "/"
    }
    const id = localStorage.getItem("id")
    const handleSignIn = () => {
        window.location.href = "/"
        // newRef.current.focus();
    }
    return (
        <div className='navbar' >
            <img
                className='logo_image'
                src="./netLogo.png"
                alt="Netflix Logo"
            />
            <div>
                {!id && <button className='signup_btn' onClick={() => window.location.href = "/create-account"} >Sign Up</button>}
            </div>


        </div>
    )
}
