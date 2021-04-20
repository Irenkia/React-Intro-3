import React, { Component } from 'react';
import { ThemeContext, themes } from './theme-context';
import ThemedButton from './themed-button';
import SwitchButton from "../../context/Button";

// Промежуточный компонент, который использует ThemedButton
function Toolbar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            Изменить цвет
        </ThemedButton>
    );
}

class Task10 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light,
        };

        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                        ? themes.light
                        : themes.dark,
            }));
        };
    }

    render() {
        // ThemedButton внутри ThemeProvider использует    
        // значение светлой UI-темы из состояния, в то время как    
        // ThemedButton, который находится вне ThemeProvider,    
        //использует тёмную UI-тему из значения по умолчанию   
        return (
            <div>
                <h3>Задание № 10</h3>
                <SwitchButton /> <br />

                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
                <section>
                    <ThemedButton />
                </section>
            </div>
        );
    }
}

export default Task10;
