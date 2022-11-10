import React from 'react';
import './register.css';

export default function Register() {
    return (
        <div className="register">
            <div className="register-Wrapper">
                <span className="register_Title">
                    Register
                </span>
                <form action="submit" className="register_Form">
                    <label htmlFor="">Username</label>
                    <input type="email" placeholder="Enter Username" />
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Enter Email" />
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Enter Password" />
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" placeholder="Enter Password Again" />
                    <button className="register_Form__Button" type="submit">Register</button>
                </form>
            </div>

        </div>
    )
}
