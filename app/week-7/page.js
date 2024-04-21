"use client";
import React, {useState} from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

const Page = () => {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleItemSelect = (itemName) => {
        const cleanedName = itemName.replace(/,.*|\s\\w*$/,'').replace(/[^\w\s]/gi,'');
        setSelectedItemName(cleanedName);
    };


    return (
        <main className="min-h-screen p-8 flex flex-col items-center justify-center">
            <h1 className="text-4x1 font-extrabold mb-6">
                Shopping List
            </h1>
            <div className="flex w-full max-w-6x1 justify-between items-start">
                <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-xl p-6 flex-1 mr-4">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-xl p-6 flex-1 ">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
};

export default Page;
