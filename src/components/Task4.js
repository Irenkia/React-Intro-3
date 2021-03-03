
import React from 'react';
import '../styles/Table.css';

let ArrTask4 = [
    {
        id: 1,
        discription: {
            year: 1982, name: "1 поколение (V10)"
        }
    },
    {
        id: 2,
        discription: {
            year: 1986, name: "2 поколение (V20)"
        }
    },
    {
        id: 3,
        discription: {
            year: 1990, name: "3 поколение (V30, XV10)"
        }
    },
    {
        id: 4,
        discription: {
            year: 1994, name: "4 поколение (V40, XV20)"
        }
    },
    {
        id: 5,
        discription: {
            year: 2001, name: "5 поколение (XV30)"
        }
    },
    {
        id: 6,
        discription: {
            year: 2006, name: "6 поколение (XV40)"
        }
    },
    {
        id: 7,
        discription: {
            year: 2011, name: "7 поколение"
        }
    },
    {
        id: 8,
        discription: {
            year: 2017, name: "8 поколение"
        }
    }
];
const Task4 = () => {

    console.log(ArrTask4);
    const AddArrTask4 = { ...ArrTask4 };
    console.log(AddArrTask4);
    const AddNewArrTask4 = { ...ArrTask4, id: 9, year: 2021, name: "9 поколение" };
    console.log(AddNewArrTask4);

    let ListItem = ArrTask4.map((item) => <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.discription.year}</td>
        <td>{item.discription.name}</td>
    </tr>)

    return (
        <div>
            <h3>Задание № 4</h3>
            <h2>Тойота Камри </h2>
            <table className="Table">

                <tbody>
                    {ListItem}
                </tbody>

            </table>
            <input type="text" />
            <button>Add</button>
            <input type="text" />
            <button>Remove</button>
        </div>
    );
}



export default Task4;
