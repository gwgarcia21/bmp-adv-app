import React from "react";
import { BsWhatsapp } from "react-icons/bs";

export const WhatsButton = (props) => {
  return (
    <div id="whatsapp-btn" className="text-center">
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
  );
};