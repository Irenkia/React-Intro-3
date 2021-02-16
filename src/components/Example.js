import React from 'react';
//import logo14 from '../images/react-3.png';
import '../styles/style.css'

class Example extends React.Component {
    constructor() {
        super();
        this.state = {
            items: ['Коля', 'Вася', 'Дима', 'Иван', 'Петя']

        };
    }

    addItem(index) {
        this.state.items.concat(index, 1);
        this.setState({ items: this.state.items });
    }

    deleteItem(index) {
        this.state.items.splice(index, 1);
        this.setState({ items: this.state.items });
    }

    render() {
        const list = this.state.items.map((item, index) => {
            return <table>
                <caption></caption>
                <thead>
                    <tr>
                        <th>
                            <button onClick={this.addItem.bind(this, index)}>
                                добавить
				            </button>
                        </th>
                        <th>
                            <button onClick={this.deleteItem.bind(this, index)}>
                                удалить
				                </button>

                        </th>
                    </tr>
                </thead>
                <tbody>
                    <div>

                        <li key={index}>
                            {item}

                        </li>;
                    </div>
                </tbody>
            </table>


        });

        return <ul>
            {list}
        </ul>
    }
}

export default Example;
