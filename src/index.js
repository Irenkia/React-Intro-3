import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "./context/ThemeContext.js";
import App from './App.js'
import "./i18nx";
import { Provider } from 'react-redux'
import store from './store/store'

// ReactDOM.render(
//     <React.StrictMode>
//         <ThemeProvider>
//         <Provider store={store}>
//             <Suspense fallback={<div>Loading...</div>}>
//                 <App />
//             </Suspense>
//             </Provider>
//         </ThemeProvider>
//     </React.StrictMode>
//     , document.getElementById('root')
// );

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <Suspense fallback={<div>Loading...</div>}>
                    <App />
                </Suspense>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
    , document.getElementById('root')
);
