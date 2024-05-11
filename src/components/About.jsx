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
              <h2>O Escritório</h2>
              <p>
                O escritório está situado em Ponta Grossa/PR, contudo, os processos tramitam 
                em sistemas que podem ser de juízo 100% digital, ou seja, de maneira telepresencial, 
                garantindo que as audiências sejam realizadas de forma online, o que possibilita a 
                contratação e a atuação dos nossos serviços em qualquer região do país.</p>
              <p>
                Além disto, por meio da contratação online, você poderá contar com a viabilidade 
                de horários sem interferir diretamente no seu dia a dia. Assim, por meio do 
                atendimento virtual, a prestação de serviço será mais rápida, dinâmica e eficaz, 
                o que permite que nosso escritório assegure a melhor proteção ao seu direito.
              </p>
              <h2>Sobre a especialista</h2>
              <p>
                Advogada na Área Familiar há mais de 5 anos, graduada e pós-graduada em 
                Processo Civil pela UEPG, especialista em Direito da Família, 
                com enfoque em divórcio. Possui inúmeras ações de divórcio, guardas e pensões, 
                visando sempre assegurar o melhor direito para você.</p>
              <p>Atendimento online em todo Brasil e presencial em Ponta Grossa e região.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
