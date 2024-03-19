import React from 'react';

const Card = ({ title, content, Icon }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '20px', 
      padding: '20px', margin: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      {Icon && <Icon style={{ marginBottom: '10px', fontSize: '50px' }} />}
      <h3>{title}</h3>
      <ul style={{ marginTop: '20px', paddingLeft: '20px', listStyleType: 'disc' }}>
        {content.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;