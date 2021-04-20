import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.js";
import logo16 from '../../assets/images/react-16.png';
import logo2 from '../../assets/images/react-2.png';
import './headerCSS/Header.css'
import PropTypes from 'prop-types'

const Header = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const heading = 'React Intro';

    return (
        <div className={`header ${darkMode ? "header-dark" : "header-light"}`}>
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
