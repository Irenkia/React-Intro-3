import React from 'react';
import logo16 from '../images/react-16.png';
import logo2 from '../images/react-2.png';
import '../styles/Header.css'
import PropTypes from 'prop-types'

const Header = () => {
    const heading = 'React Intro';

    return (
        <div className='header'>
            <div className="header-left">
                <img src={logo16} alt="React logotype" />
            </div>
            <div className="header-center">
                <h1>{heading}</h1>
            </div>
            <div className="header-right">
                <img src={logo2} alt="React logotype" />
            </div>
        </div>

    );
}

Header.propTypes = {
    name: PropTypes.string
}

export default Header;
