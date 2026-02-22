import React from 'react'
import CertiLogo from '../images/Certicontrollogocompleto.png'

const tete = ({clase,onClick}) => {
  return (
    <div className={clase}>
        <img src={CertiLogo} alt="logo" className='logo-tete'/>
        <div className="elemento-tete" onClick={onClick}>INICIO</div>
        <div className="elemento-tete" onClick={onClick}>NOSOTROS</div>
        <div className="elemento-tete" onClick={onClick}>POLITICAS</div>
        <div className="elemento-tete" onClick={onClick}>OBJETIVOS</div>
        <div className="elemento-tete" onClick={onClick}>SERVICIOS</div>
        <div className="elemento-tete" onClick={onClick}>PQRS</div>
    </div>
  )
}

export default tete