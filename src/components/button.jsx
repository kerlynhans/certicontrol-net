import React from 'react'

const button = ({valor,clase,onClick}) => {
  return (
    <input type="button" value={valor} className={clase} onClick={onClick} />
  )
}

export default button