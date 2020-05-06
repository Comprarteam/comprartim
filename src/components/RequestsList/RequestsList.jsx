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

  return (
    <>
      <Header title="Sol·licituds" fixed />
      <Tabs />
      <div className="container">
        <div className={styles['requests-container']}>
          {requests
            .filter(({ status }) => (
              (pathname === '/requests')
              || ((status === 'pending' || status === 'accepted') && pathname === '/shop')
              || ((status === 'accepted' || status === 'closed') && pathname === '/deliver')
            ))
            .map(
              (request) => <Request request={request} handleClickRequest={handleClickRequest} />,
            )}
          {!requestFinished && <Spinner />}
          {requests.length === 0 && requestFinished && (
          <div className="center">
            <p className={styles.text}>Crea una sol·licitud per començar.</p>

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
