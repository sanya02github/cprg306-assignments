"use client";
import React, {useState} from 'react';
import Item from './item';
import itemData from './items.json';

const ItemList = () => {
    const [sortBy, setSortBy] = useState("name");

    const sortItems = (items) => {
        return items.sort((a,b) => {
            if (sortBy === "name") {
                return a.name.localeCompare(b.name);
            } else if (sortBy === "category") {
                return a.category.localeCompare(b.category);
            }
            return 0;
        });
    };

const order = sortItem([...itemsData]);

return (
    <div className="w-full max-w-4x1 mx-auto mt-8">
        <div className="flex justify-center mb-4">
            <button
            onClick={() => setSortBy("name")}
            className={px-4 py-2 m-2 rounded ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200"}}
            >
                Sort by Name
                </button>
                <button
                onClick={() => setSortBy("category")}
                className={px-4 py-2 m-2 rounded ${sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200"}}
                >
                    Sort by Category 
                    </button>
        </div>

        <ul className="space-y-4 animate-fadeIn">
            {order.map(item => (
                <Item key={item.id} name={item.name} qunatity={item.quantity}
                category={item.category} />
            ))}
        </ul>
    </div>
);
            
};

export default ItemList;


            