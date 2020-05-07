import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import styles from './LoginPage.scss';

const LoginPage = () => {
  const usersLists = ['Maria', 'Josep', 'Bruno'];
  const history = useHistory();

  let communityId = '1';
  if (window.localStorage) {
    communityId = window.localStorage.getItem('communityId');
  }

  const handleClickLogin = (user) => {
    if (window.localStorage) {
      window.localStorage.setItem('userId', user);
    }
    history.push(`/community/${communityId}`);
  };

  return (
    <>
      <Header title="Inicia sessió" />
      <div className={styles['login-container']}>
        {usersLists.map((user) => (
          <div
            key={user}
            role="button"
            tabIndex={0}
            className={`${styles['login-button']} btn-small teal lighten-2 white-text`}
            onClick={() => handleClickLogin(user)}
            onKeyPress={() => handleClickLogin(user)}
          >
            {`Inicia sessió com a ${user}`}
          </div>
        ))}
      </div>
    </>
  );
};

export default LoginPage;
