import React from 'react'
import './Item.css';
const Item = ({item}) => {
  return (
    <div className='individualItem'>
      <img src={item.imagen} alt={item.descripcion}/>
      <p>{item.nombre}</p>
      <a href="">Ver detalles</a>
    </div>
  )
}

export default Item