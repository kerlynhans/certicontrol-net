import React from 'react'
import LogoCerti from '../images/SimboloCerti.png'
import Pdf from '../images/pdf.png'
import pedefe from '../formatos/OEC-FA-40-FORMATO-DE-QUEJAS-Y-APELACIONES.pdf'
import procedimiento from '../formatos/OEC-PA-09-PROCEDIMIENTO-DE-QUEJA-Y-APELACIONES-.pdf'
import FormularioPqrs from '../components/formularioPqrs'
const Pqrs = () => {
  return (
    <div className='pqrs'>
      <div className='principal-pqrs'>
        <h1 className='h1-mision-vision'>Quejas y Apelaciones:</h1> <br/>
        <div className='pqrs-cuerpo'>
          
          <p className='p-pqrs'>  
            <h3 className='h3-mision-vision'>Certi-Control S.A.S tiene como política analizar las quejas y apelaciones relacionados con la prestación de los servicio de inspección, para eso a destinado un correo electrónico en donde podrán los clientes o usuarios anteponer su Queja o Apelación, sigue las instrucciones indicadas para completar la solicitud.</h3>
          </p>
        </div>
        <div className='instrucciones'>
          <div className='pqrs-cuerpo'>
            <p className='p-pqrs'>  
              <h3 className='h3-mision-vision'> <img src={LogoCerti} alt="img-mision" className='img-certi-obj'/> Descarga el formulario de quejas y apelaciones en el siguiente icono : <a className='formulario-icono' href={pedefe} target="_blank" rel="noopener noreferrer" download="OEC-FA-40-FORMATO-DE-QUEJAS-Y-APELACIONES.pdf" ><img src={Pdf} alt="formulario quejas y reclamos" className='img-pdf'/></a></h3>
            </p>
            <p className='p-pqrs'>  
              <h3 className='h3-mision-vision'> <img src={LogoCerti} alt="img-mision" className='img-certi-obj'/> Imprime y diligencia el formulario descargado</h3>
            </p>
            <p className='p-pqrs'>  
              <h3 className='h3-mision-vision'> <img src={LogoCerti} alt="img-mision" className='img-certi-obj'/> Completa la forma indicada en la parte inferior, no olvides adjuntar el formulario descargado. </h3>
            </p>
            <div className='enviar-pqrs'>
                <FormularioPqrs/>
            </div>
            <p className='p-pqrs'>  
              <h3 className='h3-mision-vision'> <img src={LogoCerti} alt="img-mision" className='img-certi-obj'/> Puedes verificar nuestro procedimiento de quejas y apelaciones en el siguiente icono : <a className='formulario-icono' href={procedimiento} target="_blank" rel="noopener noreferrer" download="OEC-PA-09-PROCEDIMIENTO-DE-QUEJA-Y-APELACIONES-.pdf" ><img src={Pdf} alt="formulario quejas y reclamos" className='img-pdf'/></a></h3>
            </p>
            
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default Pqrs