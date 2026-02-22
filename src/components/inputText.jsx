import React from 'react'

const InputText = ({place, tipo, escribir, clase, valor, referencia}) => {
  return (
    <input type={tipo} name="inputText" placeholder={place} className={clase} onChange={escribir} value={valor} ref={referencia}/>
  )
}

export default InputText