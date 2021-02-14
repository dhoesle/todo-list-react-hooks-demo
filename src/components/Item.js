import React from 'react';

const Item = ({ item, removeItem }) => {
    return ( 
        <div> 
            <button onClick={() => removeItem(item)}>X</button>
            <span>{item}</span>
        </div> 
    );
};

export { Item as default };