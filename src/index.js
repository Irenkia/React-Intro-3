import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from "./context/ThemeContext.js";
//import { ThemeContextProvider } from "./tasks/task10//theme-context";
import App from './App.js'

render(
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
