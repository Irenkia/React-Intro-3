import React from 'react';
import '../styles/Footer.css'
import PropTypes from 'prop-types'

function Footer() {
    const CreatorName = 'Ирина Тютюн';
    const published = 'Опубликовано';
    const numberPublicationDate = 8;
    const monthPublicationDate = ' января ';
    const yearPublicationDate = 2021;
    const linkToGithub = 'GitHub';
    const backgroundDesign = 'Дизайн фона';

    return (
        <div className="footer">

            <h2>{CreatorName}</h2>
            <p>{published} {numberPublicationDate}{monthPublicationDate}{yearPublicationDate}</p>
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
