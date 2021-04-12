import React, { Component } from 'react';
import '../taskCSS/Table.css';

const ToyotaCamry = [
    [1982, "1 поколение (V10)"],
    [1986, "2 поколение (V20)"],
    [1990, "3 поколение (V30, XV10)"],
    [1994, "4 поколение (V40, XV20)"],
    [2001, "5 поколение (XV30)"],
    [2006, "6 поколение (XV40)"],
    [2011, "7 поколение"],
    [2017, "8 поколение"],
];
class TableToyota extends Component {
    data = ToyotaCamry;
    constructor(props) {
        super(props);
        this.state = { sorted: true };
        this.sortByClick = this.sortByClick.bind(this);
    }

    sortByClick = () => {
        this.setState((state) => ({
            sorted: !this.sorted,
        }));
        if (this.state.sorted) {
            return this.data.reverse();
        }
        return this.data.sort();
    };

    addByClick = () => {
        this.setState((state) => ({
            added: ++this.added,
        }));
        return this.data.push(["2021", "9 поколение"]);
    };

    removeByClick = () => {
        this.setState((state) => ({
            removed: ++this.removed,
        }));
        if (this.state.sorted) {
            return this.data.pop();
        }
        return this.data.shift();
    };
    render() {
        return (
            <div>
                <table className="Table">
                    <thead>
                        <tr>
                            <th>
                                <button type="button" onClick={this.sortByClick}>Год</button>
                            </th>
                            <th>
                                <button type="button" onClick={this.sortByClick}> Поколение</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.data.map((numList, i) => (
                            <tr key={i}>
                                {numList.map((num, j) => (
                                    <td key={j}>{num}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button type="button" onClick={this.addByClick}> Добавить</button>
                <button type="button" onClick={this.removeByClick}>Удалить</button>
            </div>
        );
    }
}

let ToyotaCamryReverse = ToyotaCamry.reverse();

function GnomeSort(a, b) {
    return a > b;
}
let s = ToyotaCamry.sort(GnomeSort);
GnomeSort(ToyotaCamryReverse);

function GnomeSort2(A) {
    let n = A.length, i = 1, j = 2;
    while (i < n) {
        if (A[i - 1] < A[i]) {
            i = j; j++;
        }
        else {
            let t = A[i - 1]; A[i - 1] = A[i]; A[i] = t;
            i--;
            if (i === 0) { i = j; j++; }
        }
    }
    return A;
}
let d = GnomeSort2(ToyotaCamryReverse);


const Task3 = () => {
    console.log(ToyotaCamry);
    console.log(ToyotaCamryReverse);
    console.log(d);
    console.log(s);
    console.log(
        [3, 9, 1, 7, 22, 8, 4].sort()
    );
    console.log(
        [3, 9, 1, 7, 22, 8, 4].sort((a, b) => a - b)
    );

    return (
        <div className="Table">
            <h3>Задание № 3</h3>
            <h2>Тойота Камри </h2>
            <TableToyota />
        </div>
    );
};


export default Task3;



