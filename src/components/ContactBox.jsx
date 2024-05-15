import React from 'react';
import { FiExternalLink } from "react-icons/fi";
import { WhatsButton } from './WhatsButton';

const ContactBox = ({ title, content, Icon }) => {
  return (
    <div style={{ 
      display: 'flex', 
      backgroundColor: '#eee',
      flexDirection: 'column', 
      border: '1px solid #ccc', 
      borderRadius: '20px', 
      padding: '20px', 
      margin: '10px', 
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
      width: '100%',
      height: '100%', // Defina a altura para 100% para que o flex funcione corretamente
      position: 'relative' // Adiciona posição relativa para o posicionamento absoluto do botão
    }}>
      <h3><b>Deixe-nos ajudá-lo(a) a iniciar um novo capítulo da sua vida com confiança e segurança.</b></h3>
      <h3><b>Agende sua consulta hoje e dê o primeiro passo em direção a um futuro mais brilhante!</b></h3>
      <div>
        <WhatsButton/>
      </div>
    </div>
  );
};

export default ContactBox;