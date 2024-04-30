import React, { useState } from 'react';
import Item from './item';
import items from './items.json';  // Assuming items.json is correctly placed and exported

const ItemList = () => {
    const [sortBy, setSortBy] = useState('name');  // Default sort by name

    const sortedItems = items.sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
    });

    return (
        <div className="container px-3" style={{ width: "40%", marginTop: "20px"}}>
            <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "20px"}}>
                <button 
                    className={`px-4 py-2 rounded ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setSortBy('name')}
                >
                    Sort by Name
                </button>
                <button 
                    className={`px-4 py-2 rounded ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setSortBy('category')}
                >
                    Sort by Category
                </button>
            </div>

            <ul className="w-auto">
                {sortedItems.map((item) => (
                    <Item
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </div>
    );
};
export default ItemList; 