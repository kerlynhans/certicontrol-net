import React from 'react'


const elementoTete = ({onClick, claseTete, valor}) => {
  return (
    <div className={claseTete} onClick={onClick}>
      {valor}
    </div>
  )
}

export default elementoTete