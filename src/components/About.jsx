import React from "react";
import aboutImage from '../img/bruna_livro.jpg';

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
              {" "}
              <img src={aboutImage} className="img-responsive" alt="" />{" "}
            </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Sobre a especialista</h2>
              <p>A dra. Bruna é graduada e pós graduada em Processo Civil pela UEPG, sendo especialista em Direito de Família. Conta com mais de 5 (cinco) anos de experiência. Atendimento humanizado e especial para você.</p>
              <h2>O Escritório</h2>
              <p>O escritório possui sede na cidade de Ponta Grossa/PR, contudo, realizamos atendimento em todo país. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
