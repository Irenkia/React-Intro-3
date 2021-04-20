import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "../styles/App.css";

export default function SwitchButton() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const onClick = () => {
        if (darkMode) {
            theme.dispatch({ type: "LIGHTMODE" });
        } else {
            theme.dispatch({ type: "DARKMODE" });
        }
    };

    return (
        <div className="button-wrapper">
            <button className={`btn ${darkMode ? "btn-dark" : "btn-light"}`} onClick={onClick}>
                {darkMode ? "Перейти в светлый режим" : "Перейти в темный режим"}
            </button>
        </div>

    );
}


