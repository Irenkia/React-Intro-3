import React from 'react';
import '../styles/Content.css'
import PropTypes from 'prop-types'

function Content() {
    const topicTitle = 'Обсуждаемый материал:';
    const readTopic_1 = '1-читать тему';
    const readTopic_2 = '2-читать тему';
    const readTopic_3 = '3-читать тему';
    const readTopic_4 = '4-читать тему';
    const readTopic_5 = '5-читать тему';
    const readTopic_6 = '6-читать тему';

    return (
        <div className="content">

            <h1>{topicTitle}</h1>
            <div className="app">
                <div className="list" />
            </div>
            <div><elQuestion /></div>

            <div id="menu">
                <h3><a href="сontent/version.html" target="_blank" rel="noreferrer">{readTopic_1}</a></h3>
                <h3><a href="сontent/git.html" target="_blank" rel="noreferrer">{readTopic_2}</a></h3>
                <h3><a href="сontent/node.html" target="_blank" rel="noreferrer">{readTopic_3}</a></h3>
                <h3><a href="сontent/npm.html" target="_blank" rel="noreferrer">{readTopic_4}</a></h3>
                <h3><a href="сontent/html-1.html" target="_blank" rel="noreferrer">{readTopic_5}</a></h3>
                <h3><a href="сontent/css-1.html" target="_blank" rel="noreferrer">{readTopic_6}</a></h3>
            </div>
        </div>

    );
}

Content.propTypes = {
    name: PropTypes.string
}

export default Content;
