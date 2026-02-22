import React from 'react'
//import Tete from '../components/tete'
import Pie from '../components/pie'
//import Apli from '../components/aplication'
import { useState } from 'react'
import Inicio from './inicio'
import Nosotros from './nosotros'
import Politicas from './politicas'
import Objetivos from './objetivos'
import Servicios from './servicios'
import Pqrs from './pqrs'
import CertiLogo from '../images/Certicontrollogocompleto.png'
//import ElementoTete from '../components/elementoTete'

const Home = () => {

  const [page, setPage] = useState('');
  
  const displayApp = () => {

    if(page === "Pqrs"){
      return <Pqrs/>;
    }
    else if(page === "Nosotros"){
      return <Nosotros/>;
    }
    else if(page === "Politicas"){
      return <Politicas/>;
    }
    else if(page === "Objetivos"){
      return <Objetivos/>;
    }
    else if(page === "Servicios"){
      return <Servicios/>;
    }
    else{
      return <Inicio/>;
    }
  } 

  const selApp = (seleccion) => {
    setPage(seleccion);
    console.log(page);
  }

  return (
    <div>
      <div className="tete-index">
      <img src={CertiLogo} alt="logo" className='logo-tete'/>
        <div className="elemento-tete" onClick={() => selApp("Inicio")}>Inicio</div>
        <div className="elemento-tete" onClick={() => selApp("Nosotros")}>Nosotros</div>
        <div className="elemento-tete" onClick={() => selApp("Politicas")}>Politicas</div>
        <div className="elemento-tete" onClick={() => selApp("Objetivos")}>Objetivos</div>
        <div className="elemento-tete" onClick={() => selApp("Servicios")}>Servicios</div>
        <div className="elemento-tete" onClick={() => selApp("Pqrs")}>Pqrs</div>
      </div>
      <div className='aplicacion'>
        {displayApp()}
      </div>
      <Pie/>
    </div>

  )
}

export default Home