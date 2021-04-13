import React from 'react';
import './contentCSS/Content.css';
import PropTypes from 'prop-types';
import Question from './Question.js';
//import Table from '../../tasks/task2/Table.js';
//import Task3 from '../../tasks/task3/Task3.js';
//import Task4 from '../../tasks/task4/Task4.js';
//import Task5 from '../../tasks/task5/Task5.js';
//import Task6 from '../../tasks/task6/Task6.js';
import Task7 from '../../tasks/task7/Task7.js';
import Task9 from '../../tasks/task9/Task9.js';
function Content() {
    const topicTitle = 'Обсуждаемый материал:';
    // const number_1 = 1;
    // const number_2 = 2;
    // const number_3 = 3;
    // const number_4 = 4;
    // const number_5 = 5;
    // const number_6 = 6;
    const readTopic = '(читать тему)';

    return (
        <div className="content">

            <h1>{topicTitle}</h1>
            <Question theme={readTopic} />
            {/* <div id="menu">
                <h3><a href="сontent/version.html" target="_blank" rel="noreferrer">{number_1}{readTopic}</a></h3>
                <h3><a href="сontent/git.html" target="_blank" rel="noreferrer">{number_2}{readTopic}</a></h3>
                <h3><a href="сontent/node.html" target="_blank" rel="noreferrer">{number_3}{readTopic}</a></h3>
                <h3><a href="сontent/npm.html" target="_blank" rel="noreferrer">{number_4}{readTopic}</a></h3>
                <h3><a href="сontent/html-1.html" target="_blank" rel="noreferrer">{number_5}{readTopic}</a></h3>
                <h3><a href="сontent/css-1.html" target="_blank" rel="noreferrer">{number_6}{readTopic}</a></h3>
            </div> */}
            {/* <Table /> */}
            {/* <Task3 /> */}
            {/* <Task4 /> */}
            {/* <Task5 /> */}
            {/* <Task6 /> */}
            <Task7 />
            <Task9 />
        </div>

    );
}

Content.propTypes = {
    name: PropTypes.string
}

export default Content;
