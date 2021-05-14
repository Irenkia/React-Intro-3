import React from 'react';
//import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "./context/ThemeContext.js";
//import { ThemeContextProvider } from "./tasks/task10//theme-context";
import App from './App.js'
import "./i18n/i18next";

ReactDOM.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
    , document.getElementById('root')
);

// render(
//     <ThemeProvider>
//         <ThemeContextProvider>
//             <App />
//         </ThemeContextProvider>
//     </ThemeProvider>
//     , document.getElementById('root')
// );
