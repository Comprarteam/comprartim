import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './Menu.scss';

const Menu = () => {
  const { communityId } = useParams();
  const showPrinter = !!communityId;
  return (
    <div className={`indigo accent-4 ${styles['menu-wrapper']}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>comp(Я)artim</div>
        <div className={styles.icons}>
          {showPrinter && (
            <Link to={`/community/${communityId}/print`} alt="Imprimir" className="white-text">
              <i className="material-icons left">local_printshop</i>
            </Link>
          )}
          <i className="material-icons">person</i>
        </div>
      </div>
    </div>
  );
};

export default Menu;
