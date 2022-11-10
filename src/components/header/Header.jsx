import React from 'react';
import "./header.css";

const Header = () => {
    return (
        <div className='header'>
            <div className="header__Titles">
                <span className='header__Titles--sm'>Technology</span>
                <span className='header__Titles--lg'>Blog</span>
            </div>

            <img className='header__img' src="https://t3.ftcdn.net/jpg/05/01/92/62/360_F_501926236_U0RyVag4vtyFkByzVQCEHNFEoZXBNeXq.jpg" alt="" />
        </div>
    );
}

export default Header;
