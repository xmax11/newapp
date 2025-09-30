import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await axios.get('http://localhost:5000/api/items');
    setItems(res.data);
  };

  const addItem = async () => {
    if (!name) return;
    await axios.post('http://localhost:5000/api/items', { name });
    setName('');
    fetchItems();
  };

  return (
    <div>
      <h1>Three-Tier App</h1>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Add item" 
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map(item => <li key={item._id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
