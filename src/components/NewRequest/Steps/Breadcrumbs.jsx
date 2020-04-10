import React from 'react';
import styles from './Breadcrumbs.scss';

const Breadcrumbs = ({ goToCategoryList, isFirstStep, categorySelected }) => (
  <ul className={styles.breadcrumb}>
    <li className={isFirstStep ? styles.active : ''}>
      <div
        role="button"
        tabIndex={0}
        onClick={goToCategoryList}
        onKeyPress={goToCategoryList}
      >
        {isFirstStep ? '1. Categoria' : (
          <span>
            <span className={`${styles.icon} food-icon-${categorySelected.id}`} />
            {categorySelected.name}
          </span>
        )}
      </div>
    </li>
    <li className={isFirstStep ? styles.disabled : styles.active}>
      <div>
        2. Productes
      </div>
    </li>
  </ul>
);

export default Breadcrumbs;
