import { useState } from 'react';
import './TipCard.css';

const TipCard = ({ title, desc, details }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="tip-card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <button onClick={() => setShow(!show)}>Baca Selengkapnya</button>
      {show && <div className="detail">{details}</div>}
    </div>
  );
};

export default TipCard;
