import React from 'react';
import CategoriesList from '../../../lib/CategoriesList';
import styles from './ChooseCategory.scss';

const ChooseCategory = ({ onClickCategory }) => (
  <>
    <p>
      El primer pas per crear una sol·licitud és
      seleccionar de quina botiga tens una necessitat
    </p>
    {CategoriesList.map((category) => (
      <div
        key={category.id}
        role="button"
        tabIndex={0}
        className={styles['category-item']}
        onClick={() => onClickCategory(category)}
        onKeyPress={() => onClickCategory(category)}
      >
        <div className={`${styles['categories-icon']} food-icon-${category.id}`} />
        <div>{category.name}</div>
      </div>
    ))}
  </>
);

export default ChooseCategory;
