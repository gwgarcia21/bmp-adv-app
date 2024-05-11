import React from "react";
import LogoOnly from "./LogoOnly";
import LogoName from "./LogoName";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <div>
            <LogoOnly style={{ width: '60px', height: '60px', margin: '5' }}/>
            <LogoName style={{ width: '180px', height: '60px' }}/>
          </div>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#header" className="page-scroll">
                Início
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Quem Somos
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Áreas de Atuação
              </a>
            </li>
            <li>
              <a href="#features" className="page-scroll">
                Sobre o Atendimento
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Entre em Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
