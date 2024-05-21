import React from "react";
import aboutImage from '../img/bruna_livro.jpg';
import escritorioImage from '../img/divorcio2.jpg';

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src={escritorioImage} className="img-escritorio" alt="" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>O Escritório</h2>
              <p>
                O escritório está situado em Ponta Grossa/PR, contudo, os processos tramitam 
                em sistemas que podem ser de juízo 100% digital, ou seja, de maneira telepresencial, 
                garantindo que as audiências sejam realizadas de forma online, o que possibilita a 
                contratação e a atuação dos nossos serviços em qualquer região do país.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Sobre a especialista</h2>
              <p>
                Advogada na Área Familiar há mais de 5 anos, graduada e pós-graduada em 
                Processo Civil pela UEPG, especialista em Direito da Família, 
                com enfoque em divórcio. Possui inúmeras ações de divórcio, guardas e pensões, 
                visando sempre assegurar o melhor direito para você.
              </p>
              <p>Atendimento online em todo Brasil e presencial em Ponta Grossa e região.</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <img src={aboutImage} className="img-especialista" alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
