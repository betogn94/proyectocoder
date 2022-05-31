import React from "react";
import ItemCount from "./ItemCount";
import './styles/ItemDetail.css';
import { useState } from "react";
import {BuyButton} from './BuyButton';
import {useCartContext} from '../Context/CartContext';



const ItemDetail = ({prod}) => {
    const [inputType, setInputType] = useState('itemCount');
    const {addToCart} = useCartContext()

    function handleInputType() {
        setInputType('buyButtons')
    }

    const onAdd = (count) => {
        addToCart({...prod, count})
    }
        
    

    console.log(prod);

    return (
        
        <div className="producto-detail">
            <img src={ prod.thumbnail } alt="Thumbnail" className="producto-detail-thumb"/>
            <div className="producto-detail-info">
                <h2 className="name">{prod.name}</h2>
                <p className="description">{prod.description}</p>
                <h4 className="price">${prod.price}</h4>
                {inputType === 'itemCount' ?
                    <ItemCount stock={prod.stock} onAdd={onAdd} initial={1} handleInputType={handleInputType}/> :
                    <BuyButton />
                }   
            </div>
        </div>
    );
};

export default ItemDetail;