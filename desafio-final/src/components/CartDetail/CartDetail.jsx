import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartDetail = () => {
  const {cart,clearCart,removeItem} = useContext(CartContext)
  console.log(cart);
  return (
    <div>
        <div>
          <div>
            {
              cart.map((producto)=>{
                return (
                  <div>
                    <div>{producto.nombre}</div>
                    <div>{producto.cantidad}</div>
                    <div>{producto.precio}</div>
                    <button onClick={removeItem}>Remover Item</button>
                  </div>
                )
              })
            }

          </div>
            <button onClick={clearCart}>Vaciar carta</button>
        </div>
    </div>
  )
}

export default CartDetail