
import React from 'react';
import Item from './item';
import itemData from './items.json';

const ItemList = ({items, onItemSelect}) => {
    const items_copy = items;
    return (
        <div className="container px-3" style= {{width: "40%", marginTop: "-30px"}}>
            <div style={{display: "flex", marginBottom: "10px"}}></div>
            <ul className="w-auto">
                {items_copy.map((item) => (
                    <item
                    key={item.id}
                    {...item}
                    onSelect={onItemSelect}
                    />
                ))}
            </ul>
            </div>
    );
            
};

export default ItemList;


            