import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import styles from './Header.scss';

const Header = ({ title, backUrl, fixed }) => (
  <div className={`${styles['header-wrapper']} ${fixed ? styles.fixed : ''} indigo accent-2 white-text`}>
    <Menu />
    <div className={`container ${styles.container}`}>
      {backUrl && (
      <Link to={backUrl} className="white-text">
        <i className="material-icons left">keyboard_arrow_left</i>
      </Link>
      )}
      <div className={styles['header-title']}>
        {title}
      </div>
    </div>
  </div>
);

export default Header;
