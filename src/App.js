//import React from 'react';
import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import SwitchButton from "./context/Button";
import Article from '../src/components/Article.js';
import './styles/App.css'
import { withTranslation } from "react-i18next";
//import { I18nextProvider } from 'react-i18next';
// import AppProvider from './context/AppProvider';
// import Router from './router/Router';
// import Toolbar from './toolbar/Toolbar';

const App = (props) => {
    //function App() {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const { t } = props;


    const onLanguageChanged = (event) => {
        let language = event.currentTarget.value;
        props.i18n.changeLanguage(language);
    };

    return (

        <div>
            <div className="toolbar">
                <p>{t("Hi")} </p>
                <p> {t("Welcome")}</p>
                <button value="en" onClick={(value) => onLanguageChanged(value)}>English</button>
                <button value="ru" onClick={(value) => onLanguageChanged(value)}>Русский</button>
                <SwitchButton />
            </div>
            <Article className={`bg ${darkMode ? "bg-dark" : "bg-light"}`} />
        </div>
    );
}

//export default App;
export default withTranslation()(App);

