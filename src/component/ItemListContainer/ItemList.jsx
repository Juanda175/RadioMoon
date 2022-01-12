import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({ artistas }) => {
    return (
        <div className='cardProd'>
            {artistas?.map((artistas) => (
                <Item key={artistas.id} {...artistas} />
            ))}
        </div>
    );
};

export default ItemList;
