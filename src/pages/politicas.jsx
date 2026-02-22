import React from 'react'
import SimboloCerti from '../images/SimboloCerti.png'

const politicas = () => {
  return (
    <div className='policitas'>
      <div className='principal-policitas'>
        <div className='politica'>
          <img src={SimboloCerti} alt="simbolo certi" className='img-certi'/>
          <p className='p-politicas'>
            <h1 className='h1-mision-vision'>Política de Calidad</h1> <br/>
            <h3 className='h3-mision-vision'>En CERTI-CONTROL S.A.S, nuestra política de calidad se basa en la emisión de dictámenes con imparcialidad, independencia, confidencialidad, ética y buen juicio. Nos comprometemos a cumplir con los acuerdos establecidos con las partes interesadas, así como con las normas y leyes que garantizan la protección de la vida, los bienes y el medio ambiente. Nuestro enfoque se centra en la consecución de talento humano idóneo, que esté debidamente entrenado y formado con habilidades y conocimientos técnicos. Además, nos aseguramos de que nuestra relación precio-calidad genere rentabilidad y beneficios para nuestros clientes, respaldándolos y brindándoles acompañamiento en todas las etapas del servicio.</h3>
          </p> 
        </div>
        <div className='politica'>
          <img src={SimboloCerti} alt="simbolo certi" className='img-certi'/>
          <p className='p-politicas'>
            <h1 className='h1-mision-vision'>Política de Seguridad y Salud en el Trabajo</h1> <br/>
            <h3 className='h3-mision-vision'>La Gerencia General de CERTI-CONTROL S.A.S en su compromiso por la protección integral de todos sus empleados, contratistas y el ambiente, afirma su compromiso hacia la implementación del Sistema de Gestión de la Seguridad y Salud en el Trabajo - SG-SST, y por la promoción de la calidad de vida laboral y la prevención de incidentes y accidentes de trabajo, enfermedades laborales y daños a la sociedad y al ambiente.
              De igual manera CERTI-CONTROL S.A.S propenderá por un ambiente laboral seguro y sano en cada uno de los servicios que presta mediante la identificación de los peligros, evaluación, valoración de los riesgos, al igual que la determinación de sus controles; para lo cual definirá y asignará todos los recursos financieros, técnicos y humanos necesarios para la implementación y mantenimiento del Sistema de Gestión de la Seguridad y Salud en el Trabajo - SG-SST.</h3>
          </p>
          
        </div>
      </div>

    </div>
  )
}

export default politicas