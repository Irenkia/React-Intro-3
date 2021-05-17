import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "./context/ThemeContext.js";
import App from './App.js'
import "./i18nx";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <Suspense fallback={<div>Loading...</div>}>
                <App />
            </Suspense>
        </ThemeProvider>
    </React.StrictMode>
    , document.getElementById('root')
);

