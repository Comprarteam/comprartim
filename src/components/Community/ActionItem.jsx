import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ActionItem.scss';

const ActionItem = ({
  linkTo, icon, children, textColor = 'black',
}) => (
  <li className={styles['action-item']}>
    <Link className={`waves-effect waves-light ${styles['action-link']} ${textColor}-text`} to={linkTo}>
      <i className="material-icons left">{ icon }</i>
      <div>{ children }</div>
      <div className={styles['next-icon']}>
        <i className="material-icons right">navigate_next</i>
      </div>
    </Link>
  </li>
);

export default ActionItem;
