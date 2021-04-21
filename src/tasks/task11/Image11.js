import React from "react";
import LanguageContext from "./LanguageProvider";
import './css11/Task11.css';

const LanguageConsumer = LanguageContext.Consumer;

const Image11 = () => {
    return (

        <LanguageConsumer>
            {({ updateLanguage }) => (
                <header>
                    выбрать язык
                    <select onChange={updateLanguage}>
                        <option value="french">french</option>
                        <option value="english">english</option>
                        <option value="italian">italian</option>
                    </select>
                </header>
            )}
        </LanguageConsumer>
    );
};
export default Image11;
