import React from "react";
import Card from "../components/Card";
import { FaUser } from 'react-icons/fa';
import { BsWhatsapp } from "react-icons/bs";
import { FaHandHoldingUsd } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { GiLinkedRings } from "react-icons/gi";

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

const contentGuardaCompartilhada = [
  "Garanta o melhor para seus filhos. Especializados em ações de guarda compartilhada ou unilateral, oferecemos soluções personalizadas para proteger o bem-estar e o futuro das crianças."
];

const contentDivorcio = [
  "Encare o futuro com clareza. Lidamos com divórcios e dissoluções de união estável com compaixão e eficiência. Resolvemos questões legais para que você possa seguir em frente com tranquilidade e certeza."
];

const contentInventario = [
  "Resolva questões patrimoniais com facilidade. Especializados em inventário e partilha de bens extrajudicial e judicial, oferecemos orientação personalizada para garantir uma divisão justa e eficiente dos ativos familiares."
];

const contentPosMorte = [
  "Honre o legado do seu ente querido. Especializados no reconhecimento de união estável pós-morte, estamos aqui para fornecer assistência compassiva e jurídica durante esse momento delicado, garantindo que os seus direitos enquanto esposo(a) sejam respeitados e protegidos."
];

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Como podemos te ajudar?</h2>
        </div>
        <div className="row">
          <div style={{ 
            display: 'grid', 
            //gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', // Isso permite que os cards quebrem a linha quando o espaço acabar
            gridTemplateRows: 'auto auto',
            gap: '20px', 
            padding: '20px' 
          }}>
            <Card Icon={MdFamilyRestroom} title="Ações de guarda compartilhada ou unilateral" content={contentGuardaCompartilhada}/>
            <Card Icon={FaHandshake} title="Divórcio e dissolução de união estável" content={contentDivorcio}/>
            <Card Icon={FaHandHoldingUsd} title="Inventário e partilha de bens extrajudicial e judicial" content={contentInventario}/>
            <Card Icon={GiLinkedRings} title="Reconhecimento de união estável pós-morte" content={contentPosMorte}/>
          </div>
        </div>
      </div>
    </div>
  );
};
