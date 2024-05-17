import React from "react";
import QuestionBox from "../components/QuestionBox";
import ContactBox from "../components/ContactBox";
import { FaUser } from 'react-icons/fa';
import { BsWhatsapp } from "react-icons/bs";
import aboutImage from '../img/about.jpg';

export const Faq = (props) => {
  return (
    <div id="faq" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Perguntas Frequentes</h2>
        </div>
        <div className="col-xs-12 col-md-12" style={{ marginBottom: '40px' }}>
          <div className="about-text">
            <p>Prezamos pela praticidade e eficiência, por isso o nosso atendimento é personalizado e 100% digital, 
              com linguagem acessível, para que o cliente entenda quais são os seus direitos e qual é a melhor solução 
              para o seu caso.</p>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', // Isso permite que os cards quebrem a linha quando o espaço acabar
              gridTemplateRows: 'auto auto', 
              gap: '20px', 
              padding: '0px' 
            }}>      
              <QuestionBox title="1. Como funciona o processo de divórcio no Brasil?" content="O divórcio no Brasil pode ser realizado de forma consensual ou litigiosa. No divórcio consensual, os cônjuges concordam com os termos da separação e apresentam um acordo ao juiz. No litigioso, quando não há acordo, o juiz decide os termos da separação."/>
              <QuestionBox title="2. Quais são os tipos de guarda existentes?" content="No Brasil, existem dois tipos principais de guarda: guarda unilateral e guarda compartilhada. Na guarda unilateral, apenas um dos pais tem a responsabilidade de cuidar dos filhos. Na guarda compartilhada, ambos os pais participam igualmente das decisões relacionadas à vida dos filhos."/>
              <QuestionBox title="3. Quais são os critérios considerados para determinar a guarda dos filhos?" content="Ao decidir sobre a guarda dos filhos, o juiz considera o melhor interesse da criança, levando em conta fatores como o vínculo afetivo com cada genitor, a disponibilidade para cuidar da criança, o ambiente familiar e a estabilidade emocional dos pais."/>      
              <QuestionBox title="4. Quais são as opções para divisão de uma empresa durante o divórcio?" content="As opções incluem venda da empresa e divisão dos lucros entre os cônjuges, manutenção de um dos cônjuges como sócio enquanto o outro recebe uma compensação financeira ou a divisão das ações da empresa entre os cônjuges, mantendo ambos como sócios."/>
              <QuestionBox title="5. Como é tratado o imóvel financiado durante o divórcio?" content="Depende do regime de bens escolhidos. O imóvel financiado pode ser considerado um bem comum a ser dividido entre os cônjuges durante o divórcio, mesmo que apenas um dos cônjuges esteja registrado como proprietário. A divisão pode ocorrer através da venda do imóvel com divisão dos lucros, compra da parte do outro cônjuge ou acordo de quem fica com o imóvel assumindo o financiamento."/>
              <ContactBox/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
