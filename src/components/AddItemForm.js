import React, { useState } from 'react';

const AddItemForm = ({ addItem }) => {
    const [item, setItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(item);
        setItem('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='add your task here' value={item} onChange={(e) => setItem(e.target.value)} />
                <button>Add Task</button>
            </form>
        </div>
    );
};

export { AddItemForm as default };