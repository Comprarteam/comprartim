import React from 'react';
import styles from './Category.scss';

const Category = ({ categoriesList, onClickCategory }) => (
  <>
    <div className={styles['categories-text']}>Categories</div>
    {categoriesList.map((category) => (
      <div
        key="category"
        role="button"
        tabIndex={0}
        onClick={() => onClickCategory(category)}
        onKeyPress={() => onClickCategory(category)}
      >
        <span className={`food-icon-${category}`} />
        <span>{category}</span>
      </div>
    ))}
  </>
);

export default Category;
