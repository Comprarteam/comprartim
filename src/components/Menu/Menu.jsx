import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.scss';

const Menu = () => {
  let communityId = '1';

  if (window.localStorage) {
    communityId = window.localStorage.getItem('communityId');
  }
  return (
    <div className={`indigo accent-4 ${styles['menu-wrapper']}`}>
      <div className={`container ${styles.container}`}>
        <Link
          to={`/community/${communityId}/`}
          alt="Imprimir"
          className={`white-text ${styles.logo}`}
        >
          comp(Я)artim
        </Link>
        <div className={styles.icons}>
          <Link to={`/community/${communityId}/print`} alt="Imprimir" className="white-text">
            <i className="material-icons left">local_printshop</i>
          </Link>
          <i className="material-icons">person</i>
        </div>
      </div>
    </div>
  );
};

export default Menu;
