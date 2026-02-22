import React from "react";
import Lkdn from "../images/linkedin.png";
import Insta from "../images/instagram.png";
import Tel from "../images/phone.png";
import Home from "../images/home.png";
import Email from "../images/email.png";
import BtnWhats from "../components/btnWaa";

const pie = () => {
  return (
    <div className="pie">
      <div className="info">
        <img className="ico-pie" src={Home} alt="adresse" />
        <h3 className="info-pie">
        Calle 49 # 11 - 56 León XIII - Soacha
        </h3>
      </div>
      <div className="info">
        <img className="ico-pie" src={Email} alt="email" />
        <h3 className="info-pie">administrativo@certicontrol.net</h3>
      </div>
      <div className="info">
        <img className="ico-pie" src={Tel} alt="tel" />
        <h3 className="info-pie">3116516756</h3>
      </div>
      <div className="redes">
        <a href="https://www.linkedin.com/feed/">
          <img src={Lkdn} alt="TikLogo" className="img-pie" id="tik" />
        </a>
        <a href="https://www.instagram.com/certicontrol/">
          <img src={Insta} alt="InstaLogo" className="img-pie" id="insta" />
        </a>
        <BtnWhats />
      </div>
    </div>
  );
};

export default pie;
