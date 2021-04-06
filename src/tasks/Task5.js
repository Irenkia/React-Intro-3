import React, { useState } from 'react';
import { runSelectionSort } from "./RunSort";
import '../styles/Task5.css';
import '../styles/Table.css';

const ArrTask5 = [
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


const Task5 = () => {

    const [task5, setTask5] = useState(ArrTask5);
    const [upYear, setUpYear] = useState(true);
    const [upName, setUpName] = useState(true);
    const [sortCriteria, setSortCriteria] = useState("");
    const [useSort, setUseSort] = useState(false);
    const [yearInput, setYearInput] = useState("");
    const [nameInput, setNameInput] = useState("");

    const ListItem = task5.map((item, index) => (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.year}</td>
            <td>{item.name}</td>
            <td><button className="car-btn" onClick={() => DeleteById(item.id)}>Удалить</button></td>
        </tr>
    ));

    var show = (oldArrTask5, newArrTask5) => {
        console.log("ArrTask5 before change:");
        console.table(oldArrTask5);

        console.log("ArrTask5 after change:");
        console.table(newArrTask5);
    };

    const sortArrTask5 = (data, ascend, property) => {
        const sortFunction = ascend
            ? (a, b) => (a[property] >= b[property] ? -1 : 1)
            : (a, b) => (a[property] >= b[property] ? 1 : -1);
        return [...data].sort(sortFunction);
    };

    const handleYearClick = () => {
        const sortedArrTask5 = useSort
            ? runSelectionSort(task5, upYear, "year")
            : sortArrTask5(task5, upYear, "year");

        // log the old and the new task5
        show = (task5, sortedArrTask5);

        setTask5(sortedArrTask5);
        setUpYear(!upYear);
        setSortCriteria("year");
    };
    console.log(task5);

    const handleNameClick = () => {
        const sortedArrTask5 = useSort
            ? runSelectionSort(task5, upName, "name")
            : sortArrTask5(task5, upName, "name");

        // log the old and the new task5
        show = (task5, sortedArrTask5);

        setTask5(sortedArrTask5);
        setUpName(!upName);
        setSortCriteria("name");
    };

    const handleUseSortCheck = (name) => {
        setUseSort(name.target.checked);
    };

    const addNameToTask5 = (task5, name) => [...task5, name];
    const handleaddNameToTask5 = (event) => {
        event.preventDefault();
        const newName = { year: +yearInput, name: +nameInput };

        const updatedTask5 = addNameToTask5(task5, newName);

        show = (task5, updatedTask5);

        setTask5(updatedTask5);
        setYearInput("");
        setNameInput("");
    };

    const removeLastNameFromTask5 = (task5) => task5.slice(0, -1);
    const handleLastNameRemove = () => {
        const updatedTask5 = removeLastNameFromTask5(task5);

        // log the old and the new task5
        show = (task5, updatedTask5);

        setTask5(task5.slice(0, -1));
    };

    const DeleteById = (idCar) => {
        setTask5(task5.filter((item) => item.id !== idCar));
    }

    return (
        <div>
            <h3>Задание № 5</h3>
            <h2>Тойота Камри </h2>
            {/* <input type="checkbox" id="heap-search" name="heapSearch" onChange={handleUseSortCheck} /> */}
            handleUseSortCheck={handleUseSortCheck};
            <table className="modelCar">
                <thead>
                    <tr >
                        <th>№ п/п</th>
                        <th ><button type="submit" onClick={handleYearClick}>Год
                        {sortCriteria !== upYear ? " ▼" : " ▲"}
                        </button></th>

                        <th ><button type="submit" onClick={handleNameClick}>Поколение
                        {sortCriteria !== upName ? " ▼" : " ▲"}
                        </button></th>
                        <th >Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {ListItem}
                </tbody>
            </table>
            <div>
                <button type="button" onClick={handleaddNameToTask5}>Добавить</button>
                <button type="button" onClick={handleLastNameRemove}>Удалить</button>
            </div>
        </div>
    );
}
export default Task5;


