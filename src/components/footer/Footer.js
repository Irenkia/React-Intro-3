import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.js";
import './footerCSS/Footer.css'
import PropTypes from 'prop-types'
import { useTranslation } from "react-i18next";
import '../../i18nx';
function Footer() {

    const { t } = useTranslation();

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const numberPublicationDate = 8;
    const yearPublicationDate = 2021;
    const linkToGithub = 'GitHub';

    return (
        <div className={`footer ${darkMode ? "footer-dark" : "footer-light"}`}>

            <h2>{t("CreatorName")}</h2>
            <p>{t("published")} {numberPublicationDate}{t("monthPublicationDate")}{yearPublicationDate}</p>
            <a href="https://github.com/Irenkia/React-Intro-3" target="_blank" rel="noreferrer">{linkToGithub}</a>
            <p>{t("backgroundDesign")}</p>
            <a href="https://ru.depositphotos.com/39223635/stock-illustration-ice-abstract-geometric-vector-background.html" target="_blank" rel="noreferrer">шаблон</a>
        </div>
    );

}

Footer.propTypes = {
    name: PropTypes.string
}

export default Footer;
