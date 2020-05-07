import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Tabs.scss';

const Tab = ({
  icon, active, linkTo, text,
}) => (
  <li className={`${styles.tab} ${active ? styles['tab-active'] : ''}`}>
    <Link className={`white-text waves-effect waves-light ${styles['tab-link']}`} to={linkTo}>
      <i className={`${styles['tab-icon']} material-icons`}>{ icon }</i>
      <span className={styles['screen-reader']}>{ text }</span>
    </Link>
  </li>
);

const Tabs = () => {
  const { pathname } = useLocation();

  return (
    <div className={`${styles.tabs} indigo accent-2 white-text`}>
      <ul className={styles['tabs-wrapper']}>
        <Tab active={pathname === '/requests'} icon="list" text="Llistat" linkTo="/requests" />
        <Tab active={pathname === '/shop'} icon="shopping_basket" text="Comprar" linkTo="/shop" />
        <Tab active={pathname === '/chat'} icon="chat" linkTo="/chat" />
        <Tab active={pathname === '/deliver'} icon="check" text="Entregar" linkTo="/deliver" />
      </ul>
    </div>
  );
};

export default Tabs;
