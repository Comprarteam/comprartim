import React, { useState } from 'react';
import Category from './Category';

const NewRequest = () => {
  const [categorySelected, setCategorySelected] = useState('');
  const categoriesList = ['farmacia', 'peix', 'poma', 'supermercat', 'croissant', 'pollastre'];

  const handleClickCategory = (categoryClicked) => {
    console.log(categoryClicked);
    setCategorySelected(categoryClicked);
  };

  if (categorySelected === '') {
    return (
      <>
        <div data-testid="NEW_REQUEST">NewRequest</div>
        <Category
          categoriesList={categoriesList}
          onClickCategory={handleClickCategory}
        />
      </>
    );
  }
  return '';
};

export default NewRequest;
