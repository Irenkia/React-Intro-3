import React from 'react';
import '../styles/Content.css'
import PropTypes from 'prop-types'
import Question from './Question';
import Table from './Table';
import Task3 from './Task3';
//import Example from './Example';
function Content() {
    const topicTitle = 'Обсуждаемый материал:';
    const number_1 = 1;
    const number_2 = 2;
    const number_3 = 3;
    const number_4 = 4;
    const number_5 = 5;
    const number_6 = 6;
    const readTopic_1 = '-читать тему';
    const readTopic_2 = '-читать тему';
    const readTopic_3 = '-читать тему';
    const readTopic_4 = '-читать тему';
    const readTopic_5 = '-читать тему';
    const readTopic_6 = '-читать тему';


    return (
        <div className="content">

            <h1>{topicTitle}</h1>
            <Question />
            <div id="menu">
                <h3><a href="сontent/version.html" target="_blank" rel="noreferrer">{number_1}{readTopic_1}</a></h3>
                <h3><a href="сontent/git.html" target="_blank" rel="noreferrer">{number_2}{readTopic_2}</a></h3>
                <h3><a href="сontent/node.html" target="_blank" rel="noreferrer">{number_3}{readTopic_3}</a></h3>
                <h3><a href="сontent/npm.html" target="_blank" rel="noreferrer">{number_4}{readTopic_4}</a></h3>
                <h3><a href="сontent/html-1.html" target="_blank" rel="noreferrer">{number_5}{readTopic_5}</a></h3>
                <h3><a href="сontent/css-1.html" target="_blank" rel="noreferrer">{number_6}{readTopic_6}</a></h3>
            </div>
            <Table />
            <Task3 />
        </div>

    );
}

Content.propTypes = {
    name: PropTypes.string
}

export default Content;
