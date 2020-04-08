import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './NewCommunity.scss';
import registerNewCommunity from '../../services/community';

const NewCommunity = () => {
  const [nameCommunity, setNameCommunity] = useState('');
  const history = useHistory();

  const handleClickRegister = async () => {
    const newCommunity = await registerNewCommunity(nameCommunity);
    history.push(`/community/${newCommunity.id}`);
  };

  return (
    <>
      <div className={styles['community-title']} data-testid="NEW_COMMUNITY">Registra una nova comunitat de veïns</div>
      <form>
        <input
          type="text"
          value={nameCommunity}
          placeholder="Introdueix el nom de la comunitat"
          onChange={(e) => setNameCommunity(e.target.value)}
        />
        <div
          role="button"
          tabIndex={0}
          className={styles['form-button']}
          onClick={() => handleClickRegister()}
          onKeyPress={() => handleClickRegister()}
        >
          Registrar comunitat
        </div>
      </form>
    </>
  );
};

export default NewCommunity;
