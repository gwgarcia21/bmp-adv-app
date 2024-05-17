import React from "react";
import presentationImage from '../img/divorcio1.jpg';

export const Presentation = (props) => {
  return (
    <div id="presentation">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
              {" "}
              <img src={presentationImage} className="img-responsive" alt="" />{" "}
            </div>
          <div className="col-xs-12 col-md-6">
            <div className="presentation-text">
              <h2>Está passando por um divórcio?
                <h3>Podemos te ajudar!</h3>
              </h2>
              <p>
                Sabemos que o processo de divórcio pode ser uma jornada emocionalmente desafiadora.
              </p>
              <p>
                Com uma abordagem centrada no cliente, nossa equipe de advogados especializados em 
                direito de família está comprometida em entender suas necessidades únicas e fornece 
                uma representação legal de alta qualidade, desde a mediação até a resolução de litígios, 
                sempre com o objetivo de alcançar o melhor resultado para você e sua família.
              </p>
              <p>
                Não deixe que as preocupações legais impeçam você de começar um novo capítulo em sua vida. 
                Entre em contato conosco hoje mesmo para uma consulta inicial e dê o primeiro passo em 
                direção a um futuro mais brilhante para você e sua família.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
