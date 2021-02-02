import React from 'react';
//import Arr from './Arr';
function Content() {
    return (
        <div id="content">

            <h1>Обсуждаемый материал:</h1>
            <div className="app">
                <div className="list" />
            </div>

            <div id="menu">
                <h3><a href="сontent/version.html" target="_blank" rel="noreferrer">1-читать тему</a></h3>
                <h3><a href="сontent/git.html" target="_blank" rel="noreferrer">2-читать тему</a></h3>
                <h3><a href="сontent/node.html" target="_blank" rel="noreferrer">3-читать тему</a></h3>
                <h3><a href="сontent/npm.html" target="_blank" rel="noreferrer">4-читать тему</a></h3>
                <h3><a href="сontent/html-1.html" target="_blank" rel="noreferrer">5-читать тему</a></h3>
                <h3><a href="сontent/css-1.html" target="_blank" rel="noreferrer">6-читать тему</a></h3>
            </div>
        </div>

    );
}

export default Content;