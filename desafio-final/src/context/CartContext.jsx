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

    const removeItem = (id) => {
        const products = cart.filter(prod => prod.id !== id)
        setCart(products)
    }

    const clearCart = () => {
        setCart([]);
    }

    const isInCart = (itemId)=>{
        return cart.some((prod) => prod.id === itemId);
    }

    return <CartContext.Provider value={{cart,addToCart,isInCart,clearCart,removeItem}}>{children}</CartContext.Provider>
    
}