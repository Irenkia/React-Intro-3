import React from "react";
import { ThemeContextConsumer } from "./theme-context";
import './css10/Task10.css';

function Button(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <button onClick={context.toggleTheme} className="button">
                    Переключить
                    <span role="img" aria-label="sun">
                        🌞
          </span>
                    <span role="img" aria-label="moon">
                        🌚
          </span>
                </button>
            )}
        </ThemeContextConsumer>
    );
}

export default Button;
