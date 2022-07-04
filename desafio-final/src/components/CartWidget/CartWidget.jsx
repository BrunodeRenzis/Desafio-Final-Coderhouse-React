import React from 'react'
import { useNavigate } from 'react-router-dom'
export const CartWidget = () => {
  const navigate = useNavigate();
  const goToCart = ()=>{
    navigate('/cart');
  }
  return (
    <ion-icon name="cart-outline" onClick={goToCart}></ion-icon>
  )
}
