import React from "react";
import LanguageProvider from "./LanguageProvider";
import Image11 from "./Image11";
import TranslatableText from "./TranslatableText";
import './css11/Task11.css';

const Task11 = () => (
    <LanguageProvider>
        <div>
            <h3>Задание № 11</h3>
            <Image11 />
            <h1>
                <TranslatableText
                    dictionary={{
                        french: "Bonjour, Michel!",
                        english: "Hello, Michael!",
                        italian: "Ciao, Michele!"
                    }}
                />
            </h1>
        </div>
    </LanguageProvider>
);

export default Task11;
