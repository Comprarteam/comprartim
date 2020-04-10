import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { actionRequest, getRequestsFromCommunity } from '../../services/Requests';
import styles from './RequestsList.scss';

const RequestsList = ({ communityId }) => {
  const [requests, setRequests] = useState([]);
  const buyerId = 'volunteerUser';

  const getRequests = async () => {
    const response = await getRequestsFromCommunity(communityId);
    const { data } = response;
    setRequests(data);
  };

  const handleClickRequest = async (request) => {
    let action = 'accept';
    let actionId = { buyerId };

    if (request.status === 'accepted') {
      action = 'close';
      actionId = { ownerId: request.ownerId };
    }
    const response = await actionRequest(request.id, actionId, action);
    if (response.ok) {
      getRequests();
    }
  };

  useEffect(() => {
    getRequests();
  }, []);

  const renderTextButton = (status) => {
    if (status === 'pending') {
      return 'Ajudar';
    }
    if (status === 'accepted') {
      return 'En Marxa';
    }
    return 'Acabada';
  };

  return (
    <div className={styles['requests-container']}>
      {requests.map((request) => (
        <div key={request.id} className={styles['request-item']}>
          <div className={`${styles['request-category']}`}>
            <div className={`${styles['category-icon']} food-icon-${request.categoryId}`} />
            <div className={styles['item-owner']}>{request.ownerId}</div>
          </div>
          <div className={styles['request-products']}>
            <ul>
              {(request.productsList).map((product) => (
                <li key={`${request.id}-${product}`}>{product}</li>
              ))}
            </ul>
          </div>
          <span>{request.status}</span>
          <div
            role="button"
            tabIndex={0}
            className={`btn-small waves-effect waves-light indigo${request.status === 'pending' ? '' : ' disable'}`}
            onClick={() => handleClickRequest(request)}
            onKeyPress={() => handleClickRequest(request)}
          >
            {renderTextButton(request.status)}
          </div>
        </div>
      ))}
      {requests.length === 0 && (
        <div className="center">
          <p className={styles.text}>Crea una sol·licitud per començar.</p>

          <Link className="btn-small waves-effect waves-light indigo lighten-1" to="/new-request">
            <i className="material-icons left">add_box</i>
            Nova sol·licitud
          </Link>
        </div>
      )}
    </div>
  );
};

export default RequestsList;
