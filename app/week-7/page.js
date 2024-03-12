"use client";
import React, {useState} from 'react';
import Link from 'next/link';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

const Page = () => {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems(currentItems => [...currentItems, newItem]);
    };

    const handleItemSelect = (name) => {
        const cleanedName = name.replace(/([\u2700-\u27BF] | [\uE000-\uF8FF] | [ - ] | [ - ] | [\u2011-\u26FF] | [ - ])/g, '').trim();
        setSelectedItemName(cleanedName);
    };


    return (
        <main className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8">
            <div className="flex justify-end mb-8">

                <Link className="relative inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full overflow-hidden group bg-gradient-to-br from-blue-500 to-green-400 text-white shadow-lg transition-all duration-300 ease-out hover:from-pink-500 hover:to-yellow-500 hover:scale-110" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 191-7- 7-7m8 141-7-7 7-7" />
                    </svg>
                    Back to Home
                    <span className="absolute inset-0 bg-white bg-opacity-20 group-hover:bg-opacity-0 transition-opacity duration-300"></span>
                </Link>
            </div>
            <div className="flex flex-col lg:flex-row items start justify-start ml- gap-1">

                <div className="w-full lg:w-1/4 pl-5 ml-9">
                    <NewItem onAddItem={handleAddItem} />
                </div>

                <div className="w-full mr-9 lg:w-3/4" >
                    <ItemList items={items} />
                </div>
            </div>
        </main>
    );
};

export default Page;
