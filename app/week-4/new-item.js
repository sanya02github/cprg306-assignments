import React, { useState } from 'react';

const NewItem = () => {
    //Initialize state variables const [name,setName]=useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');

    //Form submission handler

    const handleSubmit = (e) => {
        e.preventDefault();

        //Create item object const item = {name, quantity, category };
        console.log(item);

        //Display alert alert(Name: ${name}\nQuantity:${quantity}\nCategory:${category});

        //Reset state variables 
        
        setName('');
        setQuantity(1);
        setCategory('produce');
    };

    return (
        <div
        className="container mx-auto mt-auto">
            <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto mt-8">
            {/* Name Field */}
            <div 
            className="mb-4">
                <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2">Name</label>
                <input 
                type="text"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                min="1"
                max="99"
                required
                className="w-full px-3 py-2 border rounded shadow appearance-none"
                />
            </div>
            {/* Category Field*/}
            <div
            className="mb-4">
                <label
                htmlFor="category"
                className="block text-gray-700 font-bold mb-2">Category</label>
                <select id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border rounded shadow appearance-none"
                >
                    <option 
                    value="produce">Produce</option>
                    <option
                    value="dairy">Dairy</option>
                    <option
                    value="bakery">Bakery</option>
                    <option 
                    value="meat">Meat</option>
                    <option
                    value="frozen">Frozen</option>
                    <option
                    value="canned">Canned</option>
                    <option
                    value="dry">Dry</option>
                    <option
                    value="beverages">Beverages</option>
                    <option
                    value="snacks">Snacks</option>
                    <option
                    value="household">Household</option>
                    <option
                    value="other">Other</option>
                </select>
            </div>

            {/*Submit Button */}
            <button type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
            </button>
            </form>
        </div>
    );
};

export default NewItem;
