import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCommunity } from '../../services/Community';
import Header from '../Header/Header';
import ActionItem from './ActionItem';
import styles from './Community.scss';

const Community = () => {
  const [nameCommunity, setNameCommunity] = useState('');
  const { communityId } = useParams();
  const { localStorage } = window;
  let userId = 'Josep';

  if (localStorage) {
    localStorage.setItem('communityId', communityId);
    if (localStorage.getItem('userId') !== null) {
      userId = localStorage.getItem('userId');
    } else {
      localStorage.setItem('userId', userId);
    }
  }

  const getNameOfCommunity = async () => {
    const response = await getCommunity(communityId);
    setNameCommunity(response.name);
  };

  useEffect(() => {
    getNameOfCommunity();
  }, []);

  return (
    <>
      <Header title={`Comunitat ${nameCommunity}`} />
      <div className="container">
        <h2>Què vols fer avui?</h2>
        <p className={styles.subtitle}>Demana</p>
        <ul>
          <ActionItem icon="list" linkTo="/requests" textColor="indigo">
            Veure les meves sol·licituds
          </ActionItem>
          <ActionItem icon="add_box" linkTo="/new-request">
            Crear una nova sol·licitud
          </ActionItem>
          <ActionItem icon="chat" linkTo="/chat">
            Obrir el xat
          </ActionItem>
        </ul>
        <p className={styles.subtitle}>Ajuda</p>
        <ul>
          <ActionItem icon="shopping_basket" linkTo="/shop">
            Anar a comprar
          </ActionItem>
          <ActionItem icon="chat" linkTo="/chat">
            Obrir el xat
          </ActionItem>
          <ActionItem icon="check" linkTo="/deliver">
            Entregar comanda
          </ActionItem>
        </ul>
        <p className={styles.subtitle}>Altres</p>
        <ul>
          <ActionItem icon="transfer_within_a_station" linkTo="/" textColor="red">
            Canviar de comunitat
          </ActionItem>
        </ul>
      </div>
    </>
  );
};

export default Community;
