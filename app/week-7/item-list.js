import React from 'react';
import Item from './item';


const ItemList = ({items, onItemSelect}) => {
    return (
        <div className="container px-3" style={{width:"40%", marginTop: "30px"}}>
            <ul>
                {items.map((item) => (
                    <Item
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




