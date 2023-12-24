import { createContext, useContext, useEffect, useState } from "react";
import ShoppingCart from "../../Components/Store/ShoppingCart";




export const ShoppingCartContext = createContext({});

const initialState = localStorage.getItem('shoppingCart') ? JSON.parse(localStorage.getItem('shoppingCart')) : [];

export const ShoppingCartProvider = ({children}) => {
    const [cartItems , setCartItem] = useState(initialState);
    const [isOpen ,setIsOpen] = useState(true);
    useEffect(() => {
        localStorage.setItem('shoppingCart', JSON.stringify(cartItems))
    },[cartItems])
    const openCart = () => {
        setIsOpen(false)
    }
    const closeCart = () => {
        setIsOpen(true)
    }

    const CartQuantity = cartItems.reduce((quantity , item) => (
        item.quantity + quantity
    ),0) 

    const getItemsQuantity = (id) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    };

    const increaseCartQuantity = (id) => {
        setCartItem((CurrItems) => {
            if(CurrItems.find(item => item.id === id) == null){
                return [...CurrItems , {id , quantity: 1}]
            }else{
                return CurrItems.map((item) => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity + 1}
                    }else{
                       return item;
                    };
                });
            };
        });
    };

    const decreaseCartQuantity = (id) => {
        setCartItem((CurrItems) => {
            if(CurrItems.find(item => item.id === id) == null){
                return CurrItems.filter((item) => item.id !== id)
            }else{
                return CurrItems.map((item) => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity - 1}
                    }else{
                       return item;
                    }
                })
            }
        })
    };

    const removeItemFromCart = (id) =>{
        setCartItem((CurrItems) => CurrItems.filter((item) => item.id !== id));
    };

    return (
    <ShoppingCartContext.Provider value={{ cartItems , openCart , closeCart , CartQuantity , getItemsQuantity , increaseCartQuantity , decreaseCartQuantity , removeItemFromCart }}>
        {children}
        <ShoppingCart isOpen={isOpen} closeCart={closeCart} />
    </ShoppingCartContext.Provider>)
};

export default ShoppingCartProvider;

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}
