import React from 'react'
import './Item.css';
const Item = ({item}) => {
  return (
    <div className='individualItem'>
      <p>{item.nombre}</p>
      <img src={item.imagen} alt={item.descripcion}/>
      <a href="">Ver detalles</a>
    </div>
  )
}

export default Item