import React, { useState, useRef } from 'react';
import '../styles/DragDrop.css';

const DragDrop7 = () => {

    const draggingItem = useRef();
    const dragOverItem = useRef();

    const [list, setList] = useState([
        "1982  -  1 поколение (V10)",
        "1986  -  2 поколение (V20)",
        "1990  -  3 поколение (V30, XV10)",
        "1994  -  4 поколение (V40, XV20)",
        "2001  -  5 поколение (XV30)",
        "2006  -  6 поколение (XV40)",
    ]);

    const handleDragStart = (e, position) => {
        draggingItem.current = position;
        console.log(e.target.innerHTML);
    };

    const handleDragEnter = (e, position) => {
        dragOverItem.current = position;
        console.log(e.target.innerHTML);

        const listCopy = [...list];
        console.log(draggingItem.current, dragOverItem.current);
        const draggingItemContent = listCopy[draggingItem.current];
        listCopy.splice(draggingItem.current, 1);
        listCopy.splice(dragOverItem.current, 0, draggingItemContent);

        draggingItem.current = dragOverItem.current;
        dragOverItem.current = null;
        setList(listCopy);
    };

    // const handleDragEnd = (e) => {
    //     const listCopy = [...list];
    //     const draggingItemContent = listCopy[draggingItem.current];
    //     listCopy.splice(draggingItem.current, 1);
    //     listCopy.splice(dragOverItem.current, 0, draggingItemContent);

    //     draggingItem.current = null;
    //     dragOverItem.current = null;
    //     setList(listCopy);
    // };

    return (
        <div>
            <ul>
                {
                    list &&
                    list.map((item, index) => (
                        <li
                            onDragStart={(e) => handleDragStart(e, index)}
                            onDragOver={(e) => e.preventDefault()}
                            onDragEnter={(e) => handleDragEnter(e, index)}
                            // onDragEnd={handleDragEnd}
                            key={index} draggable>
                            {item}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default DragDrop7;

