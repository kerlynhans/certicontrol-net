import React from 'react'
import Card from '../components/card'
import Servicio2 from '../images/servicio2.jpeg'
import Servicio5 from '../images/servicio5.jpg'

const servicios = () => {
  return (
    <div className='servicios'>
    <div className='linea-cartas'>
      <Card foto={Servicio2} idLeyenda={"verde"} leyenda={"INSPECCION TANQUE ESTACIONARIO"} titulo={"INSPECCION PARCIAL Y TOTAL DE TANQUES  ESTACIONARIOS PARA GLP"} descripcion={"Basado en la RESOLUCIÓN 40245 del 6 de marzo del 2016 del Ministerio de Minas y Energía ” Reglamento Técnico para cilindros y tanque estacionario utilizado en la prestación del servicio domiciliario de GLP y procesos de mantenimiento” en los numerales 10 – 10.3."}/>
      <Card foto={Servicio5} idLeyenda={"rosa"} leyenda={"INSPECCION TANQUE TRANSPORTE"} titulo={"INSPECCIÓN PARCIAL Y TOTAL DE TANQUES PARA EL TRANSPORTE DE GLP"} descripcion={"Basado en la RESOLUCIÓN 40304 del 2 de abril del 2018 del Ministerio de Minas y Energía ” Disposiciones aplicables a los recipientes utilizados en la distribución y comercialización de GLP”."}/>
    </div>
    </div>
  )
}

export default servicios