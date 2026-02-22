import React from "react";
import PlantaGLP from "../images/plantaGLP.jpg";
import Formulario from "../components/formularioEnvio";

const Inicio = () => {
  return (
    <div className="inicio">
      <div className="contenedor-principal">
        <div className="principal">
          <div className="textos">
            <h1>NUESTRA COMPAÑIA</h1>
            <h3>
              Somos un organismo de inspección conformado por profesionales e
              inspectores calificados, cuya actividad se centra en la inspección
              de tanques utilizados para la prestación del servicio de GLP, en
              cumplimiento de la Resolución 40245 del 7 de marzo de 2016 y la
              Resolución 40490 del 16 de noviembre de 2022, ambas del Ministerio
              de Minas y Energía, igualmente en la inspección de tanques para
              transporte de GLP bajo la Resolución 40304 del 2 de abril de 2018
              del mismo Ministerio. Estas competencias nos permiten ofrecer un
              servicio serio, confiable y de calidad
            </h3>
            <div className="botones-contenedor-principal">
              <a href="#contacto" className="enlace-principal">
                <p className="enlace-principal-p">contacto</p>
              </a>
            </div>
          </div>
          <div className="video">
            <img src={PlantaGLP} alt="planta glp" className="img-inicio" />
          </div>
        </div>

        <div className="barra-contacto" id="contacto">
          <h2>CONTACTO</h2>
        </div>

        <div className="contacto">
          <Formulario />
          <div className="esp-mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9810521281297!2d-74.19581022471341!3d4.597416942543679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9e483420b063%3A0xc49d5f3b7a4a1cac!2sCl.%2049%20%2311-56%2C%20Soacha%2C%20Cundinamarca!5e0!3m2!1ses!2sco!4v1728905408505!5m2!1ses!2sco"
              width="100%"
              height="90%"
              style={{ border: "0", borderRadius: "20px" }}
              allowfullscreen="true"
              loading="lazy"
              title="map"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
