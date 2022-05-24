import React from "react";
//import ItemCount from "./ItemCount";
import './styles/Item.css';
import { Link } from "react-router-dom";


const Item = ({prod}) => {
    console.log(prod)
    //const onAdd = (cant) => {
        //alert(`Agregaste ${ cant } productos`);
    //};

    return(
        <div className="catalogo">
            <article className="product-card">

            
                <img className="product-card__image" src={prod.thumbnail} alt="" />
                <h3 className="product-card__name">{prod.name}</h3>
                <span className="product-card__name">${prod.price}</span>
                {/* <ItemCount stock={prod.stock} onAdd={onAdd} initial={1} /> */}
            <Link to= {`/detail/${prod.id}`}>    
                <button className="button-primary">Details</button>
            </Link>

            </article>
        </div>
    )
}
    

    

export default Item;
