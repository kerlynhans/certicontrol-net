import React from 'react'

const boton = ({valor, onClick, clase}) => {
  return (
    <input type="button" value={valor} className={clase} onClick={onClick}/>
  )
}

export default boton