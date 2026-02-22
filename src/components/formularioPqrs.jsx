import React from 'react'
import emailjspqrs from 'emailjs-com'
import { useRef } from 'react';
import { useState } from 'react';
import Loading from '../components/carga'

const FormularioPqrs = () => {

    //Referenciar los imputs para despues dejarlos vacios
    const refName = useRef(null);
    const refEmail = useRef(null);
    const refTele = useRef(null);
    const refArchivo = useRef(null);
    const formPQRS = useRef();
    const [animacionBtn, setanimBtn] = useState(false);
    let animacionEnvio;

    //Funcion de tiempo para inciar animacion de boton
  const animacion = () => {
    animacionEnvio = setInterval(() => {
      setanimBtn(true);
    }, 0.5);
  }

  //Funcion para finalizar animacion de boton
  const animacionFin = () => {
      clearInterval(animacionEnvio);
      setanimBtn(false);
  }

  //Referencias y funcion para borrar inputs
  const borrarIputs = () => {
    refName.current.value = '';
    refEmail.current.value = '';
    refTele.current.value = '';
    refArchivo.current.value = '';
  } 

    const sendPqrs = (e) => {
      e.preventDefault();

      animacion();
  
      emailjspqrs.sendForm('service_dx588dj', 'template_x958m1q', formPQRS.current, 'm-crBm0fPtUbhmwNK')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        setTimeout(() => {
          animacionFin();
        },3000);

        borrarIputs();
    };
  return (
    <div className='linea-inputs'>
        <form ref={formPQRS} onSubmit={sendPqrs} className='formulario-pqrs'>
        <input type="text" name="name" placeholder='Nombre completo' className='input-pqrs' required='true' ref={refName}/>
        <input type="email" name="email" placeholder='Correo' className='input-pqrs' required='true' ref={refEmail}/>
        <input type="tel" name="tel" placeholder='Telefono' className='input-pqrs' ref={refTele} required='true'/>
        <input type="file" name="file" id="" className='input-pqrs'  accept=".pdf" ref={refArchivo}/>
        {animacionBtn ? <Loading clase={"load-row"}/> : <input type="submit" value="Enviar PQRS" className='btn-mensaje-pqrs' />}        
    </form>
    </div>
  )
}

export default FormularioPqrs