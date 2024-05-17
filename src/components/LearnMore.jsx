import React from 'react';
import { FiExternalLink } from "react-icons/fi";

const LearnMore = () => {
  return (
    <div id="learn-more">
      <a href="https://api.whatsapp.com/send?phone=554288447379&text=Ol%C3%A1.%20Vim%20pelo%20site%20da%20dra.%20Bruna%20M.%20Palma%20e%20gostaria%20de%20marcar%20uma%20consulta." 
        target="_blank" rel="noreferrer" className="learn-more-link">
        <p className="learn-more-text">
          <FiExternalLink style={{ verticalAlign: 'middle', marginRight: '7px'}}/>
          {"Saiba mais"}
        </p>
      </a>
    </div>
  );
};

export default LearnMore;