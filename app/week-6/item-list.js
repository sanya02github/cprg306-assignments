
import React from 'react';
import Item from './item';

const ItemList = ({items}) => {
    return (
        <div className="container px-3" style= {{width: "100%", marginTop: "20px"}}>
            <ul>
                {items.map((item) => (
                    <Item
                    key={item.id}
                    {...item}
                />
                ))}
            </ul>
        </div>
    );
};

export default ItemList;




