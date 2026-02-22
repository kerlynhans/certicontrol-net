import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import CertiLogo from '../images/SimboloCerti.png'

const btnWaa = () => {
  return (
    <FloatingWhatsApp phoneNumber='573116516756' accountName='Certicontrol' chatMessage='Bienvenido, como podemos ayudarle?' statusMessage='Responde en 10 min aproximandamente' avatar={CertiLogo} placeholder='Escriba un mensaje aqui...'/>
  )
}

export default btnWaa