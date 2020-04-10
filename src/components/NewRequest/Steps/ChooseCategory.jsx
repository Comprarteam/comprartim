import React from 'react';
import CategoriesList from '../../../lib/CategoriesList';
import styles from './ChooseCategory.scss';

const ChooseCategory = ({ onClickCategory }) => (
  <>
    <p className={styles['categories-description']}>
      Selecciona a quina botiga vols anar a comprar.
    </p>
    <div className={styles['category-list']}>
      {CategoriesList.map((category, idx) => (
        <div
          key={category.id}
          role="button"
          tabIndex={idx}
          className={`${styles['category-item']} teal lighten-2 white-text`}
          onClick={() => onClickCategory(category)}
          onKeyPress={() => onClickCategory(category)}
        >
          <div className={`${styles['item-icon']} food-icon-${category.id}`} />
          <div className={styles.name}>{category.name}</div>
        </div>
      ))}
    </div>
  </>
);

export default ChooseCategory;
