import React from 'react';
import '../styles/Footer.css'
import PropTypes from 'prop-types'

function Footer() {
    const CreatorName = 'Ирина Тютюн';
    const published = 'Опубликовано';
    const publicationDate = '08 января 2021';
    const linkToGithub = 'GitHub';
    const backgroundDesign = 'Дизайн фона';

    return (
        <div className="footer">

            <h2>{CreatorName}</h2>
            <p>{published} <time dateTime="2021-01-08">{publicationDate}</time></p>
            <a href="https://github.com/Irenkia/React-Intro-3" target="_blank" rel="noreferrer">{linkToGithub}</a>
            <p>{backgroundDesign}</p>
            <a href="https://ru.depositphotos.com/39223635/stock-illustration-ice-abstract-geometric-vector-background.html" target="_blank" rel="noreferrer">шаблон</a>
        </div>
    );

}

Footer.propTypes = {
    name: PropTypes.string
}

export default Footer;
