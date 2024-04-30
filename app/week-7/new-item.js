"use client";

import  React, {useState} from 'react';

function NewItem({ onAddItem}) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    function handleSubmit (event)  {
        event.preventDefault();

        const item={
            id: Math.random().toString(36).substring(2,9),
            name,
            quantity,
            category
        };

        onAddItem(item);

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto my-10 p-4 shadow-lg rounded-lg"> 
            
            <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input 
          id="name" 
          type="text" 
          value={name} 
          onChange={e => setName(e.target.value)} 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          required 
        />
      </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
                    Quantity
                </label>
                <input
                id="quantity"
                type="number"
                value={quantity}
                min="1"
                max="99"
                onChange={e => setQuantity(Number(e.target.value))}
                className="shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                required
                />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                        Category
                    </label>
                    <select
                    id="category"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:bg-white focus:border-gray-500"
                    required
                    >
                         <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen">Frozen</option>
                        <option value="canned">Canned Goods</option>
                        <option value="dry">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Add Item
            </button>
        </form>
    );
}

export default NewItem;




