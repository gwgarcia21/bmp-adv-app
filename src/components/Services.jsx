import React from "react";
import Card from "../components/Card";
import { FaUser } from 'react-icons/fa';
import { BsWhatsapp } from "react-icons/bs";

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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'auto auto', gap: '20px', padding: '0px' }}>
            <Card Icon={BsWhatsapp} title="CÍVEL e CONSUMIDOR" content={contentCivelConsumidor}/>
            <Card Icon={FaUser} title="PREVIDENCIÁRIO" content={contentPrevidenciario}/>
            <Card Icon={BsWhatsapp} title="FAMÍLIA E SUCESSÕES" content={contentFamilia}/>
            <Card Icon={BsWhatsapp} title="TRABALHISTA" content={contentTrabalhista}/>
          </div>
        </div>
      </div>
    </div>
  );
};
