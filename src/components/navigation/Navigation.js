import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.js";
import logo12 from '../../assets/images/react-12.png';
import logo14 from '../../assets/images/react-14.jpg';
import './navigationCSS/Navigation.css'
import PropTypes from 'prop-types'
import { useTranslation } from "react-i18next";
//import { withTranslation } from "react-i18next";


function Navigation() {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const { t } = useTranslation();

    // const changeLanguage = (language) => {
    //     i18n.changeLanguage(language);
    // };

    // const taskTitle = 'Входное задание в интернатуру по REACT';
    // const lessonTopic = 'Тема:';
    // const lessonContent = 'git, node, npm, основы html и css';
    // const lessonGoal = 'Цель:';
    // const rubric_1 = 'Изучить базовые функции git, node, npm.';
    // const rubric_2 = 'Подготовить к дальнейшей работе систему.';
    // const rubric_3 = 'Определить уровень умения верстки.';

    return (
        <div className={`navigation ${darkMode ? "navigation-dark" : "navigation-light"}`}>

            <div className="navigation-left">
                <img src={logo12} alt="React logotype" />
            </div>
            <div className="navigation-center">
                <h2>{t("taskTitle")}</h2><br />
                <h3>{t("lessonTopic")}</h3><br />
                <p>{t("lessonContent")}</p><br />
                <h3>{t("lessonGoal")}</h3><br />
                <p>{t("rubric_1")}<br />
                    {t("rubric_2")}<br />
                    {t("rubric_3")}</p>
            </div>
            <div className="navigation-right">
                <img src={logo14} alt="React logotype" />
            </div>

        </div>

    );
}

Navigation.propTypes = {
    name: PropTypes.string
}

export default Navigation;
