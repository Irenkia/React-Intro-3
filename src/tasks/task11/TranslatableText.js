import React from "react";
import LanguageContext from "./LanguageProvider";

const LanguageConsumer = LanguageContext.Consumer;

const TranslatableText = props => (

    <LanguageConsumer>
        {({ language }) => props.dictionary[language]}
    </LanguageConsumer>
);

export default TranslatableText;
