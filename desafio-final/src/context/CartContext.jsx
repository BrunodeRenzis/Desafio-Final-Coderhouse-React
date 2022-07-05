import React, { createContext, useState } from "react";
import { useEffect } from "react";

//Creo un contexto y lo exporto para poder utilizarlo en los componentes que necesiten información.
export const CartContext = createContext();
//49.14 min
export const CartProvider = ({children}) =>{
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        console.log(cart);
    },[cart])
    

    const addToCart = (producto,cantidad)=>{
            if(isInCart)
                setCart([...cart,{...producto,cantidad}]);            
    }

    //Este no te anda
    const removeItem = (id) => {
        const products = cart.filter(prod => prod.id === id)
        setCart(products)
        if(cart.length===1)
            clearCart();
    }

    const clearCart = () => {
        setCart([]);
    }

    const isInCart = (itemId)=>{
        return cart.some((prod) => prod.id === itemId);
    }

    const getCartItems = ()=>{
        console.log("Productos en el carrito: ",cart.length);
        return cart.length;
    }

    return <CartContext.Provider value={{cart,addToCart,isInCart,clearCart,removeItem,getCartItems}}>{children}</CartContext.Provider>
    
}