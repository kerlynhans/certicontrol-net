import React from 'react'
import ReactWhatsapp from 'react-whatsapp';
import Waats from '../images/waa.png'

const waa = ({clase,elemento}) => {
  return (
    <div className='btn-waa-contenedor'>
        <ReactWhatsapp number="57-313-205-2754" message="Hello World!!!" 
        element={elemento} 
        className='btn-waa'
        animated
       
        />
    </div>
  )
}

export default waa