import React from 'react'
import Mision from '../images/misioncopy.jpg'
import Vision from '../images/visioncopy.jpg'


const nosotros = () => {
  return (
    <div className='nosotros'>
      <div className='principal-nosotros'>
        <div className='mision-vision'>
          <p className='p-mision-vision'>
            <h1 className='h1-mision-vision'>Misión</h1> <br/>
            <h3 className='h3-mision-vision'>Nuestra misión es brindar servicios de inspección de alta calidad, cumpliendo con los requisitos establecidos por la norma NTC ISO/IEC 17020:2012, con el objetivo de asegurar la seguridad, confiabilidad y cumplimiento de los estándares en las actividades de inspección. A través de nuestra experiencia y competencia, trabajamos de manera transparente, imparcial y ética, proporcionando un servicio oportuno y eficaz a nuestros clientes.</h3>
          </p>
          <img src={Mision} alt="img-mision" className='img-mision-vision'/>
        </div>
        <div className='mision-vision'>
          <img src={Vision} alt="img-vision" className='img-vision'/>
          <p className='p-mision-vision'>
            <h1 className='h1-mision-vision'>Visión</h1> <br/>
            <h3 className='h3-mision-vision'>Ser reconocidos como líderes en la prestación de servicios de inspección bajo la norma ISO 17020:2012, garantizando la confianza y satisfacción de nuestros clientes.</h3>
          </p>
          
        </div>
      </div>

    </div>
  )
}

export default nosotros