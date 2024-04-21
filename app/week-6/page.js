"use client";
import React, {useState} from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

const Page = () => {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return (
        <main className="min-h-screen p-8 flex flex-col items-center  justify-center">
            <h1 className="text-4x1 font-extrabold mb-6">
                Shopping List
            </h1>
            <div className="w-full max-w-3x1 bg-white/80 backdrop-blur-lg rounded-xl shadow-xl p-6">
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} />
            </div>
        </main>
    );
};

export default Page;
