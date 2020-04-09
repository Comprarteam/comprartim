import React from 'react';
import styles from './ChooseCategory.scss';

const ChooseCategory = ({ categoriesList, onClickCategory }) => (
  <>
    <p>
      El primer pas per crear una sol·licitud és
      seleccionar de quina botiga tens una necessitat
    </p>
    {categoriesList.map((category) => (
      <div
        key="category"
        role="button"
        tabIndex={0}
        className={styles['category-item']}
        onClick={() => onClickCategory(category)}
        onKeyPress={() => onClickCategory(category)}
      >
        <div className={`${styles['categories-icon']} food-icon-${category}`} />
        <div>{category}</div>
      </div>
    ))}
  </>
);

export default ChooseCategory;
