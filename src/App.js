//import React from 'react';
import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import SwitchButton from "./context/Button";
import Article from '../src/components/Article.js';
import './styles/App.css'

function App() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div>

            <SwitchButton />
            <Article className={`bg ${darkMode ? "bg-dark" : "bg-light"}`} />
        </div>
    );
}

export default App;
