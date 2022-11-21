import React from 'react'
import "./Navbar.css"
// import {useNavigate} from "react-router-dom"
export const Navbar = ({ newRef }) => {
    // const [items, setItems] = useState(sessionStorage.getItem('email'))
    // const navigate = useNavigate()
    const handleClick = () => {
        localStorage.clear()
        // navigate('/')
        window.location.href = "/"
    }
    const handleSignIn = () => {
        // window.location.href = "/"
        newRef.current.focus();
    }
    return (
        <div className='navbar' >
            <img
                className='logo_image'
                src="./netLogo.png"
                alt="Netflix Logo"
            />
            <div>
                {localStorage.getItem('email') ? <button className='signup_btn' onClick={handleClick} >Sign Out</button> : null}
                {!localStorage.getItem('email') ? <button className='signup_btn' onClick={handleSignIn} >Sign In</button> : null}
                {/* <button className='register-btn' >Register</button> */}
            </div>


        </div>
    )
}
