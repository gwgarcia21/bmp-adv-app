import React from "react";
import Card from "../components/Card";
import { FaUser } from 'react-icons/fa';
import { BsWhatsapp } from "react-icons/bs";
import aboutImage from '../img/about.jpg';

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>SOBRE A ESPECIALISTA</h2>
        </div>
        <div className="col-xs-12 col-md-6">
            {" "}
            <img src={aboutImage} className="img-responsive" alt="" />{" "}
          </div>
        <div className="col-xs-12 col-md-6">
          <div className="about-text">
            <p>A dra. Bruna é graduada e pós graduada em Processo Civil pela UEPG, sendo especialista em Direito de Família. Conta com mais de 5 (cinco) anos de experiência. Atendimento humanizado e especial para você.</p>
            <p>O escritório possui sede na cidade de Ponta Grossa/PR, contudo, realizamos atendimento em todo país. </p>
          </div>
        </div>
      </div>
    </div>
  );
};
