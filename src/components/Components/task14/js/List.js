import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
    <ul key={articles.id}>
        {articles.map((el) => (
            <div key={el.id}>
                <li >{el.title}</li>
            </div>
        ))}
    </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
