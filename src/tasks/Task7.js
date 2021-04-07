import React, { Component } from 'react';
//import React, { useState } from 'react';
//import { runSelectionSort } from "./RunSort";
import '../styles/Task5.css';
import '../styles/Table.css';

const ArrTask7 = [
    {
        id: 1, year: 1982, name: "1 поколение (V10)", active: false
    },
    {
        id: 2, year: 1986, name: "2 поколение (V20)", active: false
    },
    {
        id: 3, year: 1990, name: "3 поколение (V30, XV10)", active: false
    },
    {
        id: 4, year: 1994, name: "4 поколение (V40, XV20)", active: false
    },
    {
        id: 5, year: 2001, name: "5 поколение (XV30)", active: false
    },
    {
        id: 6, year: 2006, name: "6 поколение (XV40)", active: false
    },
];

const asc = "asc"
const desc = "desc"
class ToyotaCamryTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idWay: "asc",
            yearWay: "asc",
            nameWay: "asc",
            data: ArrTask7,
            idInput: "",
            yearInput: "",
            nameInput: "",
            active: props.active ? props.active : false
        };
    }

    setActive() {
        this.setState({ active: true });
    };

    sortById = (a, b) => {
        const { idWay } = this.state;
        let result = 0;
        if (a.id < b.id) {
            result = idWay === asc ? -1 : 1;
        }
        if (a.id > b.id) {
            result = idWay === asc ? 1 : -1;
        }
        this.setState({ idWay: idWay === asc ? desc : asc });
        return result;
    };

    sortByYear = (a, b) => {
        const { yearWay } = this.state;
        let result = 0;
        if (a.year < b.year) {
            result = yearWay === asc ? -1 : 1;
        }
        if (a.year > b.year) {
            result = yearWay === asc ? 1 : -1;
        }
        this.setState({ yearWay: yearWay === asc ? desc : asc });
        return result;
    };

    sortByName = (array, field) => {
        const { nameWay } = this.state;
        const n = array.length;
        for (var i = 0; i < n - 1; i++) {
            var min = i;
            for (var j = i + 1; j < n; j++) {
                if (nameWay === asc && array[j][field] < array[min][field]) {
                    min = j;
                }
                if (nameWay === desc && array[j][field] > array[min][field]) {
                    min = j;
                }
            }
            var t = array[min];
            array[min] = array[i];
            array[i] = t;
        }
        this.setState({ nameWay: nameWay === asc ? desc : asc });
        return array;
    };

    sortByClick = (sortByName = false) => {
        const { data } = this.state;
        if (sortByName) {
            return this.setState({ data: this.sortByName([...data], "name") });
        }
        return this.setState({ data: data.sort(this.sortByYear) });
    };

    addRow = () => {
        this.setState({ data: [...this.state.data, { id: "№ п/п", year: "Год", name: "Поколение" }] })
    }

    addByClick = () => {
        const { idInput, yearInput, nameInput, data } = this.state;
        if (idInput.length !== 9 || yearInput.length < 10 || nameInput.length < 10) {
            return false;
        }
        this.setState({ idInput: "", yearInput: "", nameInput: "", data: [...data, { id: idInput, year: yearInput, name: nameInput }] });
    };

    removeById = (id) => {
        const { data } = this.state;
        this.setState({ data: data.filter((item) => item.id !== id) })
    };

    removeLastInArray = () => {
        const { data } = this.state;
        this.setState({ data: data.slice(0, -1) })
    };

    handleInputChange = (e, field) => {
        this.setState({ [field]: e.target.value });
        console.log('значение this:', this);
    };

    render() {

        const { idInput, yearInput, nameInput } = this.state;
        //console.log("state", this.state);
        return (
            <div>
                <table className="modelCar">
                    <thead>
                        <tr >
                            <th>
                                <button onClick={() => this.sortByClick()}>№ п/п</button>
                            </th>
                            <th>
                                <button onClick={() => this.sortByClick()}>Год</button>
                            </th>
                            <th>
                                <button onClick={() => this.sortByClick()}>Поколение</button>
                            </th>
                            <th>
                                <button onClick={() => this.sortByClick()}>Удалить</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.year}</td>
                                <td>{item.name}</td>
                                <td onClick={() => this.removeById(item.id)}>-</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <input type="text" placeholder="№ п/п" value={idInput} onChange={(e) => this.handleInputChange(e, "idInput")} />
                <input type="text" placeholder="Год" value={yearInput} onChange={(e) => this.handleInputChange(e, "yearInput")} />
                <input type="text" placeholder="Поколение" value={nameInput} onChange={(e) => this.handleInputChange(e, "nameInput")} />

                <button onClick={this.addRow}>Добавить</button>
                <button onClick={this.removeLastInArray}>Удалить</button>
            </div>
        );
    }
}

const Task7 = () => {
    return (
        <div className="modelCar">
            <h3>Задание № 7</h3>
            <h2>Тойота Камри </h2>
            <ToyotaCamryTable />
        </div>
    );
};
export default Task7;
