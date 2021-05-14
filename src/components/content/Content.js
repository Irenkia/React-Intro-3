import './contentCSS/Content.css';
import PropTypes from 'prop-types';
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.js";
import Question from './Question.js';
//import Table from '../../tasks/task2/Table.js';
//import Task2 from '../../tasks/task2/Task2.js';
//import Task3 from '../../tasks/task3/Task3.js';
//import Task4 from '../../tasks/task4/Task4.js';
//import Task5 from '../../tasks/task5/Task5.js';
//import Task6 from '../../tasks/task6/Task6.js';
//import Task7 from '../../tasks/task7/Task7.js';
//import Task9 from '../../tasks/task9/Task9.js';
//import Task10 from '../../tasks/task10/Task10.js';
//import Task11 from '../../tasks/task11/Task11.js';
//import Task12 from '../../tasks/task12/Task12.js';
//import Task13 from '../../tasks/task13/Task13.js';
function Content() {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const topicTitle = 'Обсуждаемый материал:';
    const readTopic = '(читать тему)';

    return (
        <div className={`content ${darkMode ? "content-dark" : "content-light"}`}>

            <h1>{topicTitle}</h1>
            <Question theme={readTopic} />

            {/* <Table /> */}
            {/* <Task2 /> */}
            {/* <Task3 /> */}
            {/* <Task4 /> */}
            {/* <Task5 /> */}
            {/* <Task6 /> */}
            {/* <Task7 /> */}
            {/* <Task9 /> */}
            {/* <Task10 /> */}
            {/* <Task11 /> */}
            {/* <Task12 /> */}
            {/* <Task13 /> */}
        </div>

    );
}

Content.propTypes = {
    name: PropTypes.string
}

export default Content;
