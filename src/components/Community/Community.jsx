import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCommunity } from '../../services/Community';
import Header from '../Header/Header';
import RequestsList from '../RequestsList/RequestsList';
import styles from './Community.scss';

const Community = () => {
  const [nameCommunity, setNameCommunity] = useState('');
  const { communityId } = useParams();
  const { localStorage } = window;
  let userId = 'user';

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
      <div className={`container ${styles.container}`}>
        <Link className={`btn-small waves-effect waves-light red ${styles['new-btn']}`} to="/new-request">
          <i className="material-icons left">add_box</i>
          Nova sol·licitud
        </Link>
        <RequestsList communityId={communityId} userId={userId} />
      </div>
    </>
  );
};

export default Community;
