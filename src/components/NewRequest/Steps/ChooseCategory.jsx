import React from 'react';
import CategoriesList from '../../../lib/CategoriesList';
import styles from './ChooseCategory.scss';

const ChooseCategory = ({ onClickCategory }) => (
  <>
    <div className={styles['categories-description']}>
      El primer pas per crear una sol·licitud és
      seleccionar de quina botiga tens una necessitat
    </div>
    {CategoriesList.map((category) => (
      <div
        key={category.id}
        role="button"
        tabIndex={0}
        className={`${styles['category-item']} indigo accent-1`}
        onClick={() => onClickCategory(category)}
        onKeyPress={() => onClickCategory(category)}
      >
        <div className={`${styles['item-icon']} food-icon-${category.id}`} />
        <div>{category.name}</div>
      </div>
    ))}
  </>
);

export default ChooseCategory;
