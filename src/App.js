import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import SwitchButton from "./context/Button";
import Article from '../src/components/Article.js';
import './styles/App.css';
import i18next from 'i18next';
import COMPONENT_1_W from './components/Components/wrapComponents/component_1_w';
import COMPONENT_2_W from './components/Components/wrapComponents/component_2_w';

const App = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const onLanguageChanged = (language) => {
        i18next.changeLanguage(language);
    };

    return (
        <div>
            <div className="toolbar">
                <COMPONENT_1_W />
		        <COMPONENT_2_W />
                <button onClick={() => onLanguageChanged("en")}>English</button>
                <button onClick={() => onLanguageChanged("ru")}>Русский</button>
                <SwitchButton />
            </div>
            <Article className={`bg ${darkMode ? "bg-dark" : "bg-light"}`} />
        </div>
    );
}

export default App;
