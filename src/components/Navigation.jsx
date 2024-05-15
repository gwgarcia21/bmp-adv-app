import React from "react";
import LogoOnly from "./LogoOnly";
import LogoName from "./LogoName";

const handleNavigationClick = (event, targetId) => {
  event.preventDefault();
  const menuElement = document.getElementById("menu");
  const menuHeight = menuElement ? menuElement.offsetHeight : 0;
  const offset = -menuHeight; // Ajuste este valor conforme necessário
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  }
};
export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a href="#header" className="page-scroll" onClick={(e) => handleNavigationClick(e, "header")}>
            <LogoOnly style={{ width: '60px', height: '60px', margin: '5' }}/>
            <LogoName style={{ width: '180px', height: '60px' }}/>
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#header" className="page-scroll" onClick={(e) => handleNavigationClick(e, "header")}>
                Início
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll" onClick={(e) => handleNavigationClick(e, "services")}>
                Áreas de Atuação
              </a>
            </li>
            <li>
              <a href="#features" className="page-scroll" onClick={(e) => handleNavigationClick(e, "features")}>
                Sobre o Atendimento
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll" onClick={(e) => handleNavigationClick(e, "about")}>
                Quem Somos
              </a>
            </li>
            <li>
              <a href="#faq" className="page-scroll" onClick={(e) => handleNavigationClick(e, "faq")}>
                Seus Direitos
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll" onClick={(e) => handleNavigationClick(e, "contact")}>
                Entre em Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
