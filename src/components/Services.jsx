import React from "react";
import Card from "../components/Card";
import { FaUser } from 'react-icons/fa';
import { BsWhatsapp } from "react-icons/bs";

const contentCivelConsumidor = [
  'Indenizações por danos morais e materiais',
  'Inscrição indevida SPC/SERASA',
  'Revisão de contrato RMC e RCC'
];

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Áreas de Atuação</h2>
        </div>
        <div className="row">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'auto auto', gap: '20px', padding: '0px' }}>
            <Card Icon={BsWhatsapp} title="CÍVEL e CONSUMIDOR" 
              content={contentCivelConsumidor}/>
            <Card Icon={FaUser} title="PREVIDENCIÁRIO" content={contentCivelConsumidor}/>
            <Card Icon={BsWhatsapp} title="FAMÍLIA E SUCESSÕES" content={contentCivelConsumidor}/>
            <Card Icon={BsWhatsapp} title="TRABALHISTA" content={contentCivelConsumidor}/>
          </div>
        </div>
      </div>
    </div>
  );
};
