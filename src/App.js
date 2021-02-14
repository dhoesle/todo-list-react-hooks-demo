import React, { useEffect, useState } from 'react';
import AddItemForm from './components/AddItemForm';
import ItemList from './components/ItemList';
import './App.css';

function App() {

  const [items, setItems] = useState(['item 1', 'item 2']);
  
  const addItem = (item) => {
    setItems([...items, item]);
  }

  const removeItem = (itemToBeDeleted) => {
    setItems(items.filter((item) =>
    itemToBeDeleted !== item));
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>To Do List</h1>
        <AddItemForm addItem={addItem} />
        <ItemList items={items} removeItem={removeItem} />
      </header>
    </div>
  );
};

export default App;