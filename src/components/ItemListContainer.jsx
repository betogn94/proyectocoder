import React from 'react';

function ItemListContainer ( {greetings = 'Hola soy el ItemListContainer'} ) {
    return (
        <div>
            <h3> { greetings } </h3>
        </div>

    );
};

export default ItemListContainer;
    