import React from "react";
import Logo from "./Logo";
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-12 section-title">
          <div className="row">
            <div className="col-xs-12 col-md-6" style={{ marginBottom: '30px'}}>
              <Logo/>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="contact-text">
                <h2>Entre em Contato</h2>
                <div className="contact-link" style={{ marginTop: '30px' }}>
                    <a href="tel:+554288447379">
                      <p style={{ wordSpacing:'10px', letterSpacing:'2px' }}>
                        <BsFillTelephoneFill style={{ verticalAlign: 'middle'}}/>
                        {"  (42)99125-7232 "}
                      </p>
                    </a>
                </div>
                <div className="contact-link">
                    <a href="https://api.whatsapp.com/send?phone=554288447379&text=Ol%C3%A1.%20Vim%20pelo%20site%20da%20dra.%20Bruna%20M.%20Palma%20e%20gostaria%20de%20marcar%20uma%20consulta."
                      target="_blank">
                      <p style={{ wordSpacing:'10px', letterSpacing:'2px' }}>
                        <BsWhatsapp style={{ verticalAlign: 'middle'}}/>
                        {" (42)8844-7379 "}
                      </p>
                    </a>
                </div>
                <div className="contact-link">
                    <a href="https://www.instagram.com/brunampalma/"
                      target="_blank">
                      <p style={{ wordSpacing:'10px', letterSpacing:'2px' }}>
                        <BsInstagram style={{ verticalAlign: 'middle'}}/>
                        {" @brunampalma "}
                      </p>
                    </a>
                </div>
                <div className="contact-link">
                    <a href="mailto:advogadabrunapalma@gmail.com">
                      <p style={{ wordSpacing:'10px', letterSpacing:'2px' }}>
                        <IoIosMail style={{ verticalAlign: 'middle'}}/>
                        {" advogadabrunapalma@gmail.com "}
                      </p>
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
