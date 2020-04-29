import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Tabs.scss';

const Tab = ({ icon, active, linkTo }) => (
  <li className={`${styles.tab} ${active ? styles['tab-active'] : ''}`}>
    <Link className={`white-text waves-effect waves-light ${styles['tab-link']}`} to={linkTo}>
      <i className="material-icons">{ icon }</i>
    </Link>
  </li>
);

const Tabs = () => {
  const { pathname } = useLocation();

  return (
    <div className="indigo accent-2 white-text">
      <ul className={styles['tabs-wrapper']}>
        <Tab active={pathname === '/requests'} icon="list" linkTo="/requests" />
        <Tab active={pathname === '/shop'} icon="shopping_basket" linkTo="/shop" />
        {/* <Tab active={pathname === '/chat'} icon="chat" linkTo="/chat" /> */}
        <Tab active={pathname === '/deliver'} icon="check" linkTo="/deliver" />
      </ul>
    </div>
  );
};

export default Tabs;
