import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCommunity } from '../../services/Community';
import Header from '../Header/Header';
import RequestsList from '../RequestsList/RequestsList';
import styles from './Community.scss';

const Community = () => {
  const [nameCommunity, setNameCommunity] = useState('');
  const { communityId } = useParams();

  if (window.localStorage) {
    window.localStorage.setItem('communityId', communityId);
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
        <RequestsList communityId={communityId} />
      </div>
    </>
  );
};

export default Community;
