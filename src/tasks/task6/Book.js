import React from "react";

export default function Book(props) {
    const { books } = props;
    return (
        <div
            style={{
                position: "fixed",
                top: "0",
                left: "0",
                right: "0",
                fontSize: "14px",
                padding: "20px 10px",
                background: "#333",
                color: "#bbb",
                letterSpacing: "0.5px"
            }}
        >
            {books.map(book => (
                <div key={book.index}>
                    <p>{book.name}</p>
                    <p>{book.authors}</p>
                    <p>{book.numberOfPages}</p>
                    <p>{book.country}</p>
                </div>
            ))}
        </div>
    );
}

