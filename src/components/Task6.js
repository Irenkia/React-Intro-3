//import React from 'react';
import React, { Component } from 'react';
//import React, { useState } from 'react';
//import axios from 'axios';
//import ScotchInfoBar from './ScotchInfoBar';
import Book from './Book';
import '../styles/Task6.css';

const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";

class MyBooks extends Component {
    constructor() {
        super();

        this.state = {
            id: 1,
            books: "",
            allBooks: []
        }
        this.handleChange = this.handleChange.bind(this)
    }


    componentDidMount() {
        fetch(apiURL)
            .then((response) => response.json())
            .then((response) => {
                const { name } = response[0]

                this.setState({ allBooks: name })
                console.log({ allBooks: name })
            })

        //.then(res => this.setState({ books: res.results }))
        //console.log(books)

    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value })
        console.log({ [name]: value });
    }

    render() {
        const ListItem = this.setState.name;
        return (
            <div>
                {/* Получить данные из API */}
                <div className="fetch-button">
                    <button type="text" value={this.state.allBooks}
                        onClick={this.handleChange}>Получить данные</button>
                    <br />
                </div>
                {/* Отображение данных из API*/}
                <div className="books">
                    {/* {this.state.allBooks.map((item, index) =>
                        <div key={index} className="book">
                            <h3>Книга {item + 1}</h3>
                            <h2>{item.name}</h2>
                            <div className="details">
                                <p>👨: {item.authors}</p>
                                <p>📖: {item.numberOfPages} страниц</p>
                                <p>🏘️: {item.country}</p>
                            </div>
                        </div>
                    )} */}
                </div>
            </div>

        )
    }
};

{/* {this.state.allBooks.map((item, index) =>
                        <div key={index} className="book">
                            <h3>Книга {item + 1}</h3>
                            <h2>{item.name}</h2>
                            <div className="details">
                                <p>👨: {item.authors}</p>
                                <p>📖: {item.numberOfPages} страниц</p>
                                <p>🏘️: {item.country}</p>
                            </div>
                        </div>
                    )} */}
const Task6 = () => {

    return (
        <div className="Task6">
            <h3>Задание № 6</h3>
            <h2>Книги Игры Престолов </h2>
            <h3>Получить список из API и отобразить его</h3>
            <MyBooks />
        </div>
    );
    //--------------------------------------------------------------------------------------------------------

    //     const [books, setBooks] = useState(null);

    //     const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";


    //     const fetchData = async () => {
    //         const response = await axios.get(apiURL)

    //         setBooks(response.data)
    //     }

    //     return (
    //         <div>
    //             <h3>Задание № 6</h3>
    //             <div className="Task6">
    //                 <h1>Книги Игры Престолов </h1>
    //                 <h2>Получить список из API и отобразить его</h2>

    //                 {/* Получить данные из API */}
    //                 <div>
    //                     <button className="fetch-button">Получить данные</button>
    //                     <br />
    //                 </div>

    //                 {/* Отображение данных из API*/}
    //                 <div className="books">
    //                     {books &&
    //                         books.map((book, index) => {
    //                             const cleanedDate = new Date(book.released).toDateString();
    //                             const authors = book.authors.join(', ');

    //                             return (
    //                                 <div className="book" key={index}>
    //                                     <h3>Book {index + 1}</h3>
    //                                     <h2>{book.name}</h2>

    //                                     <div className="details">
    //                                         <p>👨: {authors}</p>
    //                                         <p>📖: {book.numberOfPages} страниц</p>
    //                                         <p>🏘️: {book.country}</p>
    //                                         <p>⏰: {cleanedDate}</p>
    //                                     </div>
    //                                 </div>
    //                             );
    //                         })}

    //                     {/* <div className="book">
    //                         <h3>Номер книги</h3>
    //                         <h2>Название книги</h2>

    //                         <div className="details">
    //                             <p>👨: Автор / Авторы</p>
    //                             <p>📖: Число страниц</p>
    //                             <p>🏘️: Страна издания</p>
    //                             <p>⏰: Дата выхода</p>
    //                         </div>
    //                     </div> */}
    //                 </div>
    //             </div>
    //             <div>
    //                 <ScotchInfoBar seriesNumber="7" />
    //             </div>
    //         </div>
    //     );

    // }
    //------------------------------------------------------------------------------------------------------------------
};

export default Task6;


