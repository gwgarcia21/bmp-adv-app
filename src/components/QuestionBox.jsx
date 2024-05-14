import React from 'react';
import { FiExternalLink } from "react-icons/fi";
import LearnMore from "../components/LearnMore";

const QuestionBox = ({ title, content, Icon }) => {
  return (
    <div style={{ 
      display: 'flex', 
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
      <h3><b>{title}</b></h3>
      <p>{content}</p>
      <div style={{ 
          position: 'absolute', // Posiciona o botão absolutamente em relação ao pai
          bottom: '10px', // Define a distância do fundo
          right: '10px', // Define a distância da direita
        }}>
        <LearnMore/>
      </div>
    </div>
  );
};

export default QuestionBox;