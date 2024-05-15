import React from 'react';
import LearnMore from "../components/LearnMore";
import { FiExternalLink } from "react-icons/fi";

const Card = ({ title, content, Icon }) => {
  return (
    <div id="card" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      border: '1px solid #ccc', 
      borderRadius: '20px', 
      padding: '20px', 
      margin: '10px', 
      backgroundColor: 'rgba(255,255,255,0.08)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
      height: '100%' // Defina a altura para 100% para que o flex funcione corretamente
    }}>
      <div style={{ 
        flex: '0 0 35%', // Isso faz com que a primeira linha ocupe exatamente 35% do espaço
        marginBottom: '20px' 
      }}>
        {Icon && <div style={{ marginBottom: '10px', color: 'var(--cor-destaque)' }}><Icon style={{ fontSize: '50px' }} /></div>}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', // Isso centraliza o título verticalmente
          justifyContent: 'center' // Isso centraliza o título horizontalmente
        }}>
          <h3 style={{ textShadow: '1px 2px 2px var(--cor-primaria)' }}>{title}</h3>
        </div>
      </div>
      <div style={{ 
        flex: '1' // Isso faz com que a segunda linha ocupe o restante do espaço
      }}>
        {content.map((item, index) => (
          <div key={index} style={{ marginBottom: '10px', color: 'var(--cor-destaque)', textShadow: '1px 2px 2px var(--cor-primaria)' }}>{item}</div>
        ))}
        
        {/* <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
          {content.map((item, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>{item}</li>
          ))}
        </ul> */}
      </div>
      
      <div style={{ 
          display: 'flex', 
          alignItems: 'right',
          justifyContent: 'right',
        }}>
          <LearnMore/>
      </div>
    </div>
    
  );
};

export default Card;