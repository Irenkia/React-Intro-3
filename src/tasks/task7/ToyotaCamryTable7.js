import React, { Component } from 'react';
import TabItems7 from './TabItems7';
import '../taskCSS/Table.css'
import '../task5/css5/Task5.css';

const asc = "asc"
const desc = "desc"
class ToyotaCamryTable7 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idWay: asc,
            yearWay: asc,
            nameWay: asc,
            data: TabItems7,
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
            result = idWay === asc ? 1 : -1;
        }
        else if (a.id > b.id) {
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
        for (let i = 0; i < n - 1; i++) {
            let min = i;
            for (let j = i + 1; j < n; j++) {
                if (nameWay === asc && array[j][field] < array[min][field]) {
                    min = j;
                }
                if (nameWay === desc && array[j][field] > array[min][field]) {
                    min = j;
                }
            }
            let t = array[min];
            array[min] = array[i];
            array[i] = t;
        }
        this.setState({ nameWay: nameWay === asc ? desc : asc });
        return array;
    };

    sortByClick = (sortByName) => {
        const { data } = this.state;
        if (sortByName) {
            return this.setState({ data: this.sortByName([...data], "name") });
        }
        return this.setState({ data: data.sort(this.sortByYear) });
    };

    addRow = () => {
        this.setState({ data: [...this.state.data, { id: this.state.idInput, year: this.state.yearInput, name: this.state.nameInput }] })
        this.setState({ idInput: "", yearInput: "", nameInput: "" })
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
                                <button className="cursor" onClick={() => this.sortByClick(this.state.idWay)}>№ п/п</button>
                            </th>
                            <th>
                                <button className="cursor" onClick={() => this.sortByClick(this.state.yearWay)}>Год</button>
                            </th>
                            <th>
                                <button className="cursor" onClick={() => this.sortByClick(this.state.nameWay)}>Поколение</button>
                            </th>
                            <th>
                                <button onClick={() => this.sortByClick}>Удалить</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.year}</td>
                                <td>{item.name}</td>
                                <td className="cursor" onClick={() => this.removeById(item.id)}>удалить</td>
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

export default ToyotaCamryTable7;
