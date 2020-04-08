import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  const [pin, setPin] = useState('');
  const onChange = (e) => {
    setPin(e.target.value.trim());
  };

  return (
    <>
      <div>Acces href</div>
      <div>{document.location.href}</div>
      <h1 className="vertical-container">comp(Я)artim</h1>
      <div>
      Aquesta és una app per poder compartir les compres entre tots els veins
       i així minimitzar el risc i el número de desplaçaments
      </div>
      <Link to="/new-community">Nova comunitat</Link>
      <div>
        <input type="text" onChange={onChange} />
      </div>
      <Link to={`/requests/${pin}`}>Unir-se</Link>
    </>
  );
};

export default Landing;
