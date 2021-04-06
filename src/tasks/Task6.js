import React, { Component } from 'react';
import '../styles/Task6.css';

const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";

class MyBooks extends Component {
    constructor() {
        super();
        this.state = {
            errorMessage: null,
            isLoaded: false,
            allBooks: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        fetch(apiURL)
            .then((response) => response.json())
            .then((response) => {
                this.setState({ isLoaded: true, allBooks: response })
                console.log({ allBooks: response })
            },
                (error) => {
                    this.setState({ isLoaded: true, errorMessage: error })
                    console.log(this.state.errorMessage);
                }
                //error => console.log(error)
            );

    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value })
        console.log({ [name]: value });
    }

    render() {
        const { errorMessage, isLoaded } = this.state;
        if (errorMessage) {
            return <p>Error {errorMessage.message}</p>
        }
        else if (!isLoaded) {
            return <p>Loading...</p>
        }
        else {
            return (
                <div>
                    {/* Получить данные из API */}
                    <div className="fetch-button">
                        <button type="text" value={this.state.allBooks} onClick={this.handleChange}>Получить данные</button>
                        <br />
                    </div>

                    {/* Отображение данных из API*/}
                    <div className="books">

                        {this.state.allBooks.map((item, index) => {
                            return (
                                <div key={index} className="book">
                                    <h3>Книга {item.isbn}</h3>
                                    <h2>{item.name}</h2>
                                    <div className="details">
                                        <p>👨: {item.authors}</p> <br />
                                        <p>📖: {item.numberOfPages} страниц</p> <br />
                                        <p>🏘️: {item.country}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        }
    }
};

const Task6 = () => {

    return (
        <div className="Task6">
            <h3>Задание № 6</h3>
            <h2>Книги Игры Престолов </h2>
            <h3>Получить список из API и отобразить его</h3>
            <MyBooks />
        </div>
    );
};

export default Task6;


