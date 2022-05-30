import React from 'react';
import './header.css';

const Header = () => {
// # todo Tax Src URL
    return (
        <div className="header">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/6/61/Itemis_Logo.svg" alt="Logo"/>
            <div className="header-text"> Sales Tax </div>
        </div>
    );
}

export default Header;