import React from "react";
import LogoOnly from "./LogoOnly";
import LogoName from "./LogoName";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          {/* <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button> */}
          {/* <a className="navbar-brand page-scroll" href="#page-top" style={{ width: '20px', height: '20px' }}>
            BMP ADVOCACIA
          </a>{" "} 
          <img src={logoPng} alt="Logo" style={{ width: '100px', height: '100px' }}/>*/}
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
              <a href="#about" className="page-scroll">
                O Escritório
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
              <a href="#team" className="page-scroll">
                Entre em Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
