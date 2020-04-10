import React from 'react';
import Header from '../Header/Header';
import styles from './LoginPage.scss';

const LoginPage = () => {
  const usersLists = ['Josep', 'Maria'];
  const handleClickLogin = (user) => {
    if (window.localStorage) {
      window.localStorage.setItem('userId', user);
    }
  };

  return (
    <>
      <Header title="Inicia sessió" />
      <div className={styles['login-container']}>
        {usersLists.map((user) => (
          <div
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
