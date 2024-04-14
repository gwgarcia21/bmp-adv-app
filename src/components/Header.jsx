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
                {/* <h1>
                  {props.data ? props.data.title : "Carregando"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Carregando"}</p>*/}
                <div style={{ marginTop: '20px'}}>
                  <Logo/>
                </div>
                <a
                  href="https://api.whatsapp.com/send?phone=554288447379&text=Ol%C3%A1.%20Vim%20pelo%20site%20da%20dra.%20Bruna%20M.%20Palma%20e%20gostaria%20de%20marcar%20uma%20consulta."
                  target="_blank"
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
