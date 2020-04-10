import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import RequestsList from '../RequestsList/RequestsList';
import styles from './Community.scss';

const Community = () => {
  const { communityId } = useParams();

  if (window.localStorage) {
    window.localStorage.setItem('communityId', communityId);
  }

  return (
    <>
      <Header title={`La meva comunitat (${communityId})`} />
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
