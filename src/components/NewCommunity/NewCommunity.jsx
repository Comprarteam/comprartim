import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import registerNewCommunity from '../../services/community';
import styles from './NewCommunity.scss';

const NewCommunity = () => {
  const [nameCommunity, setNameCommunity] = useState('');
  const history = useHistory();

  const handleClickRegister = async () => {
    const newCommunity = await registerNewCommunity(nameCommunity);
    history.push(`/community/${newCommunity.id}`);
  };

  const backUrl = '/';

  return (
    <>
      <Header title="Nova comunitat" backUrl={backUrl} />
      <div className="container">
        <h5>Registra una nova comunitat de veïns.</h5>
        <p>
          Crea una comunitat per poder compartir les teves compres. És molt fàcil,
           simplement decideix quin nom li vols donar i nosaltres fem la resta.
        </p>
        <p className={`${styles.example} grey-text lighten-2`}>
          Un exemple podria ser l'adreça on es troba la comunitat
        </p>
        <form className="center">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">group</i>
              <input
                id="community-id-input"
                type="text"
                value={nameCommunity}
                placeholder="Introdueix el nom de la comunitat"
                onChange={(e) => setNameCommunity(e.target.value)}
              />
              <label htmlFor="community-id-input">Nom de la comunitat</label>
            </div>
          </div>
          <div
            role="button"
            tabIndex={0}
            className="btn-small waves-effect waves-light indigo"
            onClick={() => handleClickRegister()}
            onKeyPress={() => handleClickRegister()}
          >
            <i className="material-icons left">group_add</i>
            Registrar comunitat
          </div>
        </form>
      </div>
    </>
  );
};

export default NewCommunity;
