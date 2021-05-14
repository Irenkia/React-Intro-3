import React from "react";
import "./css13/Task13.css";
import AppProvider from './context/AppProvider';
import Router from './context/RouteContext';
import Toolbar from './toolbar/Toolbar.js';
import registerServiceWorker from './registerServiceWorker';

const Task13 = () => {
    return (
        <div>
            <AppProvider>
                <h3>Задание № 13</h3>
                <h1>React internationalization</h1>
                <Toolbar />
                <Router />
            </AppProvider>
        </div>
    );
}

export default Task13;

registerServiceWorker();

