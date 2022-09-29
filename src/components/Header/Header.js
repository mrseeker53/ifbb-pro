import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div className='brand'>
                <img src={logo} alt="" />
                <h1>IFBB Professional League</h1>
            </div>
            <div>
                <a href="/dashboard">Dashboard</a>
                <a href="/services">Services</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;