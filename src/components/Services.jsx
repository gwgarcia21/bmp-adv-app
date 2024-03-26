import React from "react";
import Card from "../components/Card";
import { FaUser } from 'react-icons/fa';
import { BsWhatsapp } from "react-icons/bs";
import { FaHandHoldingUsd } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";

const contentCivelConsumidor = [
  'Indenizações por danos morais e materiais',
  'Inscrição indevida SPC/SERASA',
  'Revisão de contrato RMC e RCC'
];

const contentPrevidenciario = [
  'Benefício assistencial LOAS/BPC (idoso ou deficiente)',
  'Auxílio doença',
  'Auxílio acidente',
  'Revisões',
  'Aposentadorias',
  'Pensão por morte'
];

const contentFamilia = [
  'Ações de guarda',
  'Pensão alimentícia',
  'Ações de abandono afetivo',
  'Divórcio e dissolução de união estável',
  'Inventário e partilha de bens extrajudicial e judicial',
  'União homoafetiva',
  'Reconhecimento de união estável pós-morte'
];

const contentTrabalhista = [
  'Reconhecimento de vínculo trabalhista',
  'Rescisão indireta (FGTS em atraso)',
  'Dispensa discriminatória',
  'Ações acidentárias - estabilidade para acidentários e gestantes',
  'Horas extras',
  'Verbas atrasadas'
];

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Áreas de Atuação</h2>
        </div>
        <div className="row">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Isso permite que os cards quebrem a linha quando o espaço acabar
            gridTemplateRows: 'auto auto', 
            gap: '20px', 
            padding: '0px' 
          }}>
            <Card Icon={FaUser} title="CÍVEL e CONSUMIDOR" content={contentCivelConsumidor}/>
            <Card Icon={FaHandHoldingUsd} title="PREVIDENCIÁRIO" content={contentPrevidenciario}/>
            <Card Icon={MdFamilyRestroom} title="FAMÍLIA e SUCESSÕES" content={contentFamilia}/>
            <Card Icon={MdOutlineWork} title="TRABALHISTA" content={contentTrabalhista}/>
          </div>
        </div>
      </div>
    </div>
  );
};
