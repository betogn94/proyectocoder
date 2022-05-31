import {createContext, useContext, useState} from 'react';

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    function isInCart(id) {
        return cartList.some(el => el.id === id);
    }
    function addToCart(prod) {
        if (isInCart(prod.id)) {
            let i = cartList.findIndex(el => el.id === prod.id);
            const newCartList = cartList;
            newCartList[i].quantity += prod.quantity;
            setCartList(newCartList);
        } else {
            setCartList([
                ...cartList,
                prod]);
        }
    }
    const deleteItem = (id) => {
        const newCart = [...cartList];
        let index = newCart.findIndex((prod) => prod.id ===id);
        newCart.splice(index,1);

        setCartList([...newCart])
    }

    const deleteCart = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value = { {
            cartList,
            addToCart,
            deleteItem,
            deleteCart
        } }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;