import React, { useState } from 'react';
import TabItems7 from '../tasks/task7/TabItems7';
import './hooksCSS/Buttons7.css';

const Buttons7 = () => {
    const [active, setActive] = useState(0);

    return (
        <div>
            <div className="tabs">
                {TabItems7.map(({ id, year, name }) => <TabItemComponent
                    key={id}
                    year={year}
                    name={name}
                    onItemClicked={() => setActive(id)}
                    isActive={active === id}
                />
                )}
            </div>
            <div className="content">
                {TabItems7.map(({ id, name }) => {
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

export default Buttons7;





