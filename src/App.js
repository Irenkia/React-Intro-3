import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import SwitchButton from "./context/Button";
import Article from '../src/components/Article.js';
import './styles/App.css';
import i18next from 'i18next';

const App = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const onLanguageChanged = (event) => {
        i18next.changeLanguage(event);
    };

    return (
        <div>
            <div className="toolbar">
                <button onClick={() => onLanguageChanged("en")}>English</button>
                <button onClick={() => onLanguageChanged("ru")}>Русский</button>
                <SwitchButton />
            </div>
            <Article className={`bg ${darkMode ? "bg-dark" : "bg-light"}`} />
        </div>
    );
}

export default App;