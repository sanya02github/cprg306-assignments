import React from 'react';

const Item = ({name, quantity, category}) => {
    return (
        <li className="flex justify-between items-center py-3 px-4 bg-white/90 backdrop-blur-md rounded-lg shadow hover:shadowing-lg transition-shodow duration-300 ease-in-out m-2">
            <span className="text-gray-800 font-medium">{name}</span>
            <span className="text-blue-600 font-semibold">{quantity} ({category})
            </span>
        </li>
    );
};

export default Item;
