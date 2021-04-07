//import React, { Component } from 'react';
import React, { useState } from 'react';
import '../styles/Task7New.css';

const tabItems = [
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
];

const Task7New = () => {
    const [active, setActive] = useState(0);

    return (
        <div>
            <div className="tabs">
                {tabItems.map(({ id, year, name }) => <TabItemComponent
                    key={id}
                    year={year}
                    name={name}
                    onItemClicked={() => setActive(id)}
                    isActive={active === id}
                />
                )}
            </div>
            <div className="content">
                {tabItems.map(({ id, name }) => {
                    return active === id ? name : ''
                })}
            </div>
        </div>
    )
}

const TabItemComponent = ({
    year = '',
    onItemClicked = () => console.error('Вы не передали компоненту никаких действий'),
    isActive = false,
}) => {
    return (
        <div className={isActive ? 'tabitem' : 'tabitem tabitem--inactive'} onClick={onItemClicked}>
            <p className="tabitem__title">{year}</p>
        </div>
    )
};

export default Task7New;




