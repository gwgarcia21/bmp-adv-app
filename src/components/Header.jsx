import React from "react";
import Logo from "./Logo";
import { BsWhatsapp } from "react-icons/bs";
import { WhatsButton } from "./WhatsButton";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <div className="section-title">
                  <h1>Advocacia especializada em Direito de Família</h1>
                </div>
                <div className="about-text">
                  <p>Em nosso escritório cada história familiar é tratada com <b>empatia, 
                    dedicação e expertise.</b>
                  </p>
                  <p>Nosso compromisso é guiar você através dos desafios 
                    do <b>divórcio</b> ou do <b>processo de inventário</b> com clareza, tranquilidade e 
                    resoluções justas.
                  </p>
                  <p>Entendemos que cada família é única, e é por isso que 
                    oferecemos <b>soluções personalizadas</b> para atender às suas necessidades específicas. 
                  </p>
                </div>
                <WhatsButton/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
