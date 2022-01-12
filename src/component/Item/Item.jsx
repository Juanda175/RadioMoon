import React from 'react';
import './Item.css';

const Item = ({ foto}) => {
    return (
        <div className="card">
            
            <img src={foto} alt={foto} />
        </div>
    );
};

export default Item;
