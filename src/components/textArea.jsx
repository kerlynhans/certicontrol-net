import React from 'react'

const textArea = ({place, clase, escribir, referencia}) => {
  return (
    
        <textarea name="" id="" cols="30" rows="10" placeholder={place} className={clase} onChange={escribir} ref={referencia}></textarea>
    
  )
}

export default textArea