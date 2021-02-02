import React from 'react';
import logo16 from '../images/react-16.png';
import logo2 from '../images/react-2.png';
const Header = () => {
    return (
        <div id="header">
            <div className="header-left">
                <img src={logo16} alt="React logotype" />
            </div>
            <div className="header-center">
                <h1 style={{ color: '#0E0352' }}>React Intro</h1>
            </div>
            <div className="header-right">
                <img src={logo2} alt="React logotype" />
            </div>
        </div>

    );
}

export default Header;