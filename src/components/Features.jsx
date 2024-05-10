import React from "react";
import Card from "../components/Card";
import { FaUser } from 'react-icons/fa';
import { BsWhatsapp } from "react-icons/bs";
import aboutImage from '../img/about.jpg';

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>COMO FUNCIONA NOSSO ATENDIMENTO?</h2>
        </div>
        <div className="col-xs-12 col-md-12" style={{ marginBottom: '40px' }}>
          <div className="about-text">
            <p>Prezamos pela praticidade e eficiência, por isso o nosso atendimento é personalizado e 100% digital, 
              com linguagem acessível, para que o cliente entenda quais são os seus direitos e qual é a melhor solução 
              para o seu caso.</p>
            <ul style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                border: '1px solid #ccc', 
                borderRadius: '20px', 
                padding: '20px', 
                margin: '10px', 
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
                width: '100%',
                height: '100%' // Defina a altura para 100% para que o flex funcione corretamente
              }}>
              <li>
                <p><b>1º passo</b>: Nos chame no WhatsApp para iniciarmos o seu atendimento gratuito;</p>
              </li>
              <li>
                <p><b>2º passo</b>: Você receberá um atendimento personalizado e 100% digital diretamente com a Dra. Bruna, podendo tirar suas dúvidas do conforto da sua casa ou de onde estiver;</p>
              </li>
              <li>
                <p><b>3º passo</b>: Após o atendimento, será apresentada a proposta de honorários e o contrato de prestação de serviços. Com o aceite da proposta e a assinatura do contrato, começaremos a trabalhar no seu caso.</p>
              </li>
            </ul>
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
  );
};
