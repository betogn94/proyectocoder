import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import './styles/CartWidget.css';
import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <Link to= '/cart'>
                <FontAwesomeIcon icon= { faCartShopping } size="2x" color="white" /> 
            </Link>
        </div>
    );
};

export default CartWidget;