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
                  <h2>Advocacia especializada em Direito de Família</h2>
                </div>
                <div className="about-text">
                  <p>Prezamos pela praticidade e eficiência, por isso o nosso atendimento é personalizado e 100% digital, 
              com linguagem acessível, para que o cliente entenda quais são os seus direitos e qual é a melhor solução 
              para o seu caso.</p>
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
