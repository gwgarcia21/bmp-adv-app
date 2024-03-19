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
                <div>
                  <Logo/>
                </div>
                <a
                  href="https://wa.me/1XXXXXXXXXX"
                  target="_blank"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  <div style={{ display: 'flex', alignItems: 'center'}}>
                    <BsWhatsapp/>
                    <span style={{ marginLeft: '10px' }} >Fale conosco via WhatsApp</span>
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
