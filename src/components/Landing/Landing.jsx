import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  const [pin, setPin] = useState('');
  const onChange = (e) => {
    setPin(e.target.value.trim());
  };

  return (
    <>
      <h1>comp(Я)artim</h1>
      <h2>
        Evitem desplaçaments, evitem contagis
      </h2>
      <div>
      Aquesta és una app per poder compartir les compres entre tots els veins
       i així minimitzar el risc i el número de desplaçaments
      </div>
      <Link to="/new-community">Nova comunitat</Link>
      <div>
        <input type="text" onChange={onChange} />
      </div>
      <Link to={`/community/${pin}`}>Unir-se</Link>
    </>
  );
};

export default Landing;
