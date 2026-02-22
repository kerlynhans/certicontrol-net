import React from 'react'
import emailjs from 'emailjs-com'
import { useRef } from 'react';
import { useState } from 'react';
import Loading from '../components/carga'


const FormularioEnvio = () => {

     //Referenciar los imputs para despues dejarlos vacios
    const refNombre = useRef(null);
    const refCorreo = useRef(null);
    const refTelefono = useRef(null);
    const refMensaje = useRef(null);
    const form = useRef();
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
    refNombre.current.value = '';
    refCorreo.current.value = '';
    refTelefono.current.value = '';
    refMensaje.current.value = '';
  } 

    const sendEmail = (e) => {
      e.preventDefault();

      animacion();
  
      emailjs.sendForm('service_dx588dj', 'template_x958m1q', form.current, 'm-crBm0fPtUbhmwNK')
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
    <div className='formulario-contacto'>
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder='Nombre completo' className='input-drop-index' required='true' ref={refNombre}/>
        <input type="email" name="email" placeholder='Correo' className='input-drop-index' required='true' ref={refCorreo}/>
        <input type="tel" name="tel" placeholder='Telefono' className='input-drop-index' ref={refTelefono} required='true'/>
        <textarea name="message" className='txtMensaje' placeholder='Mensaje' required='true' ref={refMensaje}/>
        {animacionBtn ? <Loading clase={"load-row"}/> : <input type="submit" value="Enviar Mensaje" className='btn-mensaje' />}
    </form>
    </div>
  )
}

export default FormularioEnvio