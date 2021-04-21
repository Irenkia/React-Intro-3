//import React from "react";
import React, { Component } from 'react';
import Button from "./themed-button";
import { ThemeContextConsumer } from "./theme-context";
import './css10/Task10.css';

class Image extends Component {

    render() {
        return (
            <ThemeContextConsumer>
                { context => (
                    <div className={`${context.theme}-image image`}>
                        <div className={`${context.theme}-ball ball`} />
                        <Button />
                    </div>
                )}
            </ThemeContextConsumer>
        );
    }
}

Image.contextType = ThemeContextConsumer;

export default Image;
