import React from 'react';
import Item from './Item';

const ItemList = ({ items, removeItem }) => {
    return (
        <div className="items-container">
            <ul>
                {items.map((item) => (
                    <Item key ={item} item={item} removeItem={removeItem} />
                ))}
            </ul>
        </div>
    );
};

export { ItemList as default };