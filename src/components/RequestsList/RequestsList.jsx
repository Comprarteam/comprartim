import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { actionRequest, getRequestsFromCommunity } from '../../services/Requests';
import Header from '../Header/Header';
import Spinner from '../Spinner/Spinner';
import Request from './Request';
import styles from './RequestsList.scss';
import Tabs from './Tabs';

const RequestsList = () => {
  const [requests, setRequests] = useState([]);
  const [requestFinished, setRequestFinished] = useState(false);
  const { pathname } = useLocation();
  const communityId = window.localStorage.getItem('communityId');
  const loggedUserId = window.localStorage.getItem('userId');

  let title = '';
  switch (pathname) {
    case '/shop':
      title = 'Anar a comprar';
      break;
    case '/deliver':
      title = 'Entregar comanda';
      break;
    case '/chat':
      title = 'Xat';
      break;
    default:
      title = 'Les meves sol·licituds';
  }

  const getRequests = async () => {
    const response = await getRequestsFromCommunity(communityId);
    setRequests(response.data);
    setRequestFinished(true);
  };

  const handleClickRequest = async (request) => {
    let action = 'accept';
    let actionId = { buyerId: loggedUserId };

    if (request.status === 'accepted') {
      action = 'close';
      actionId = { ownerId: request.ownerId };
    }
    const response = await actionRequest(request.id, actionId, action);
    if (response.ok) {
      getRequests();
    } else {
      setRequestFinished(true);
    }
  };

  useEffect(() => {
    getRequests();
  }, []);

  const filterByUser = ({ status, ownerId, buyerId }) => (
    (pathname === '/requests' && ownerId === loggedUserId)
    || (pathname === '/shop' && (status === 'pending' || (status === 'accepted' && buyerId === loggedUserId)))
    || (pathname === '/chat' && status === 'accepted' && buyerId === loggedUserId && ownerId !== loggedUserId)
    || (pathname === '/deliver' && buyerId === loggedUserId && (status === 'accepted' || status === 'closed'))
  );

  return (
    <>
      <Header title={title} fixed />
      <Tabs />
      <div className="container">
        <div className={styles['requests-container']}>
          {requests
            .filter(filterByUser)
            .map(
              (request) => (
                <Request
                  key={request.id}
                  request={request}
                  handleClickRequest={handleClickRequest}
                />
              ),
            )}
          {!requestFinished && <Spinner />}
          {(requests.length === 0 || pathname === '/requests') && requestFinished && (
            <div className="center">
              <p className={styles.text}>
                {requests.length === 0 && requestFinished
                  ? 'Crea una sol·licitud per començar.'
                  : 'Necessites quelcom més?'}
              </p>
              <Link className="btn-small waves-effect waves-light indigo lighten-1" to="/new-request">
                <i className="material-icons left">add_box</i>
                Nova sol·licitud
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RequestsList;
