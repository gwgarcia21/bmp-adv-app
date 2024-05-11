import React from "react";
import Logo from "./Logo";
import { BsWhatsapp } from "react-icons/bs";

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
                <a
                  href="https://api.whatsapp.com/send?phone=554288447379&text=Ol%C3%A1.%20Vim%20pelo%20site%20da%20dra.%20Bruna%20M.%20Palma%20e%20gostaria%20de%20marcar%20uma%20consulta."
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-custom btn-lg page-scroll"
                  style={{
                    display: 'inline-block',
                    maxWidth: '80%',
                    whiteSpace: 'wrapped',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <BsWhatsapp/>
                    <span style={{ marginLeft: '10px', whiteSpace: 'normal' }} >Fale conosco via WhatsApp</span>
                  </div>
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
