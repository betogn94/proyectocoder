import { useCartContext } from "../Context/CartContext"
import "./styles/Cart.css"
import { Link } from "react-router-dom";


export const Cart = ({prod}) => {

  const {cartList, deleteCart, deleteItem} = useCartContext()

  const total = cartList.reduce((acc, item)=> acc = acc + (parseFloat(item.price)*item.count),0)


  return (
    <div className="cart-container">
      <div className="cart">
        <h2 className="cartTitle">Your Cart</h2>
          {cartList.map(prod => 
          <li className="cartItem">
            <Link to={`/detail/${prod.id}`}>
            <img className="img-cart" alt="." src={prod.thumbnail}></img>
            </Link>
            <p>{prod.name}</p>
            <p>Price: ${prod.price}</p>
            <p>Items: {prod.stock}</p>

            <button onClick={()=>deleteItem(prod.id)} className="delete-item">X</button>
          </li>)}
          {cartList.length ? <div>`
                                <h3 className="totalCompra">Total: ${total}</h3>
                                <button className="delete-button" onClick={deleteCart}>Clear All</button>
                            </div>  : <div className="carritoVacio">
                                                <p>No products in your Cart</p>
                                                <Link to={"/"}>
                                                  <p>Keep Buying</p>
                                                </Link>
                                              </div> }
                              
      </div>
        <div className="cartInfo">
            <form>
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Last Name"/>
            <input type="text" placeholder="Country"/>
            <input type="text" placeholder="City"/>
            <input type="text" placeholder="Adress"/>
            <button type="submit">Go Buy</button>
            </form>

        </div>
    </div>
  )
}
  