import React, { Component } from 'react';
import '../taskCSS/Table.css';

const ArrTask4 = [
    {
        id: 1, year: 1982, name: "1 поколение (V10)"
    },
    {
        id: 2, year: 1986, name: "2 поколение (V20)"
    },
    {
        id: 3, year: 1990, name: "3 поколение (V30, XV10)"
    },
    {
        id: 4, year: 1994, name: "4 поколение (V40, XV20)"
    },
    {
        id: 5, year: 2001, name: "5 поколение (XV30)"
    },
    {
        id: 6, year: 2006, name: "6 поколение (XV40)"
    },
    {
        id: 7, year: 2011, name: "7 поколение"
    },
    {
        id: 8, year: 2017, name: "8 поколение"
    },
];
class ToyotaCamry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idRunning: "asc",
            yearRunning: "asc",
            nameRunning: "asc",
            data: ArrTask4,
            idInput: "",
            yearInput: "",
            textInput: "",
        };
    }

    sortByClick = (sortByName = false) => {
        const { data } = this.state;
        if (sortByName) {
            return this.setState({ data: this.sortByName([...data], "name") });
        }
        return this.setState({ data: data.sort(this.sortByYear) });
    };

    sortById = (a, b) => {
        const { idRunning } = this.state;
        let result = 0;
        if (a.id < b.id) {
            result = idRunning === "asc" ? -1 : 1;
        }
        if (a.year > b.year) {
            result = idRunning === "asc" ? 1 : -1;
        }
        this.setState({ idRunning: idRunning === "asc" ? "desc" : "asc" });
        return result;
    };

    sortByYear = (a, b) => {
        const { yearRunning } = this.state;
        let result = 0;
        if (a.year < b.year) {
            result = yearRunning === "asc" ? -1 : 1;
        }
        if (a.year > b.year) {
            result = yearRunning === "asc" ? 1 : -1;
        }
        this.setState({ yearRunning: yearRunning === "asc" ? "desc" : "asc" });
        return result;
    };

    sortByName = (array, field) => {
        const { nameRunning } = this.state;
        const n = array.length;
        for (var i = 0; i < n - 1; i++) {
            var min = i;
            for (var j = i + 1; j < n; j++) {
                if (nameRunning === "asc" && array[j][field] < array[min][field]) {
                    min = j;
                }
                if (nameRunning === "desc" && array[j][field] > array[min][field]) {
                    min = j;
                }
            }
            var tmp = array[min];
            array[min] = array[i];
            array[i] = tmp;
        }
        this.setState({ nameRunning: nameRunning === "asc" ? "desc" : "asc" });
        return array;
    };

    addRow = () => {
        this.setState({ data: [...this.state.data, { id: this.state.idInput, year: this.state.yearInput, name: this.state.yearInput }] })
    }

    addByClick = () => {
        const { idInput, yearInput, textInput, data } = this.state;
        if (idInput.length < 10 || yearInput.length !== 9 || textInput.length < 10) {
            return false;
        }
        this.setState({ idInput: "", yearInput: "", textInput: "", data: [...data, { id: idInput, year: yearInput, name: textInput }] });
    };

    removeById = (id) => {
        const { data } = this.state;
        this.setState({ data: data.filter((item) => item.id !== id) })
    }
    removeLastInArray = () => {
        const { data } = this.state;
        this.setState({ data: data.slice(0, -1) })
    };
    handleInputChange = (e, field) => {
        this.setState({ [field]: e.target.value });
    }

    render() {
        const { idInput, yearInput, textInput } = this.state;
        console.log("state", this.state);
        return (
            <div>
                <table className="table4">
                    <thead>
                        <tr>
                            <th>
                                <button type="button" onClick={() => this.sortByClick(true)}>
                                    № п/п
                            </button>
                            </th>
                            <th>
                                <button type="button" onClick={() => this.sortByClick(true)}>
                                    Год
                            </button>
                            </th>
                            <th>
                                <button type="button" onClick={() => this.sortByClick(true)}>
                                    Поколение
                            </button>
                            </th>
                            <th>
                                <button type="button" onClick={() => this.sortByClick(true)}>
                                    Кнопка
                            </button>
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.year}</td>
                                <td>{item.name}</td>
                                <td onClick={() => this.removeById(item.id)}>удалить</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button type="button" onClick={this.addRow}>Добавить</button>
                <input type="text" value={idInput} onChange={(e) => this.handleInputChange(e, "idInput")} />
                <input type="text" value={yearInput} onChange={(e) => this.handleInputChange(e, "yearInput")} />
                <input type="text" value={textInput} onChange={(e) => this.handleInputChange(e, "textInput")} />
                <button type="button" onClick={this.removeLastInArray} >Удалить</button>
            </div>
        );
    }
}

const Task4 = () => {

    // console.log(ArrTask4);
    // console.log(Object.keys(ArrTask4));

    // var obj_1 = { 10: 'a', 5: 'b', 7: 'c' };
    // console.log(Object.keys(obj_1));

    // var clone = Object.assign({}, obj_1);
    // var obj_2 = {
    //     a: 1,
    //     b: {
    //         c: 2,
    //     },
    // };
    // //Пример: слияние объектов
    // var newObj = Object.assign(clone, obj_2);
    // console.log(clone); // изменился и сам целевой объект.
    // console.log(newObj);

    // //Пример: наследуемые и неперечисляемые свойства не копируются
    // var obj_3 = Object.create({ foo: 1 }, { // foo является унаследованным свойством.
    //     bar: {
    //         value: 2  // bar является неперечисляемым свойством.
    //     },
    //     baz: {
    //         value: 3,
    //         enumerable: true  // baz является собственным перечисляемым свойством.
    //     }
    // });
    // var copy = Object.assign({}, obj_3);
    // console.log(copy); // { baz: 3 }

    // const AddNewArrTask4 = { ...ArrTask4, id: 9, year: 2021, name: "9 поколение" };
    // console.log(AddNewArrTask4);

    return (
        <div className="Table">
            <h3>Задание № 4</h3>
            <h2>Тойота Камри </h2>
            <ToyotaCamry />
        </div>
    );
};

export default Task4;


