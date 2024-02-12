import React from 'react';

const Item = ({ name, quantity, category }) => {
    return (
        <li className="bg-gray-200 p-4 mb-4 rounded-md">
            <p className="font-bold text-lg">{name}</p>
            <p className="text-gray-700">Quantity: {quantity}</p>
            <p className="text-gray-700">Category: {category}</p>
        </li>
    );
};

export default Item;