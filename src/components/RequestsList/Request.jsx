import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './RequestsList.scss';

const STATUS_CONFIG = {
  pending: {
    color: 'pink',
    text: 'Comprar',
  },
  accepted: {
    color: 'amber',
    text: 'Entregat',
  },
  closed: {
    color: 'green',
    text: 'Finalitzat',
  },
};

const Request = ({ request, handleClickRequest }) => {
  const loggedUserId = window.localStorage.getItem('userId');
  const history = useHistory();
  const getColor = (status) => STATUS_CONFIG[status] && STATUS_CONFIG[status].color;
  const getButtonText = (status) => STATUS_CONFIG[status] && STATUS_CONFIG[status].text;

  const toDateTime = (secs) => {
    const time = new Date(1970, 0, 1); // Epoch
    time.setSeconds(secs);
    return time.toLocaleDateString();
  };

  const getContact = (ownerId, buyerId) => (
    loggedUserId === ownerId ? buyerId : ownerId
  );

  const handleClickChat = (contact, chatId) => {
    history.push(`/chat/${contact}/${loggedUserId}/${chatId}`);
  };

  const {
    buyerId, categoryId, chatId, createdAt, id, ownerId, status, productsList,
  } = request;
  // eslint-disable-next-line no-underscore-dangle
  const creationDate = toDateTime(createdAt && createdAt._seconds);
  return (
    <div key={id} className={`${styles.item} ${getColor(status)} lighten-5`}>
      <div className={`${getColor(status)} lighten-2 ${styles['owner-date']}`}>
        <div>{ownerId}</div>
        <div>{creationDate}</div>
      </div>
      <div className={styles.products}>
        <div className={`${styles.icon} food-icon-${categoryId}`} />
        <ul>
          {(productsList).map((product) => (
            <li key={`${request.id}-${product}`}>{product}</li>
          ))}
        </ul>
      </div>
      <div className={styles.action}>
        <button
          type="button"
          tabIndex={0}
          className={`btn-small waves-effect waves-light white-text ${getColor(status)} darken-3`}
          onClick={() => handleClickRequest(request)}
          onKeyPress={() => handleClickRequest(request)}
        >
          {getButtonText(status)}
        </button>
        {status === 'accepted' && loggedUserId !== ownerId && loggedUserId === buyerId
        && (
          <button
            type="button"
            tabIndex={0}
            className={`btn-small waves-effect waves-light white-text ${getColor(status)} darken-3`}
            onClick={() => handleClickChat(getContact(ownerId, buyerId), chatId)}
            onKeyPress={() => handleClickChat(getContact(ownerId, buyerId), chatId)}
          >
            <i className="material-icons left">chat</i>
            {`Xat amb ${getContact(ownerId, buyerId)}`}
          </button>
        )}
      </div>
    </div>
  );
};

export default Request;
