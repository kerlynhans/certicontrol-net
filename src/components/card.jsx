import React from 'react'


const card = ({foto, titulo, descripcion, leyenda, idLeyenda}) => {
  return (
    <div class="card">
      <p id={idLeyenda} className='leyenda'>{leyenda}</p>
        <img src={foto} alt="prueba-carta"/>
        <div class="card__content">
            <p class="card__title">{titulo}</p>
            <hr className='hr-carta'></hr>
            <p class="card__description">{descripcion}</p>
        </div>
    </div>
  )
}

export default card