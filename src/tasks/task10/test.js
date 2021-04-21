import React from "react";
import { ThemeContextProvider } from "./theme-context.js";
import Image from "./Image";
import './css10/Task10.css';

function Test(props) {
    return (
        <ThemeContextProvider>

            <div className="app">
                <Image />
            </div>
        </ThemeContextProvider>

    );
}

export default Test;

