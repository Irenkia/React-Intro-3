import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from "./context/ThemeContext.js";
import App from './App.js'

render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
    , document.getElementById('root')
);


