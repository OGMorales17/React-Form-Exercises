import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import './BoxLists.css';

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);

    const add = boxObj => {
        setBoxes(boxes => [...boxes, { ...boxObj, id: uuid() }]);
    };

    const remove = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id))
    };

    const boxComponents = boxes.map(box => (
        <Box
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            handleRemove={remove}
            backgroundColor={box.backgroundColor}
        />
    ));

    return (
        <div className='BoxLists'>
            <NewBoxForm createBox={add} />
            {boxComponents}
        </div>
    )
}

export default BoxList;

