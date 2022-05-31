import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import './styles/CartWidget.css';
import { Link } from "react-router-dom";
import {useCartContext} from "../Context/CartContext"

const CartWidget = () => {
    const {cartList} = useCartContext()

    const totalItems = cartList.reduce((acc,item)=> acc = acc +item.count, 0)

    return (
        <>
            {cartList.lenght ? <div className="cart-widget">
                <Link to= '/cart'>
                    <FontAwesomeIcon icon= { faCartShopping } size="2x" color="white" /> 
                    <button className="totalItems">{totalItems}</button>
                </Link>
            </div> : <div>
                <div className="cart-widget">
                    <Link to= '/cart'>
                        <FontAwesomeIcon icon= { faCartShopping } size="2x" color="white" /> 
                        <button className="totalItems">{totalItems}</button>
                    </Link>
                </div>
            </div>}
        </>    
    );
};

export default CartWidget;