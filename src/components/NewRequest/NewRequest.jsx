import React, { useState } from 'react';
import Header from '../Header/Header';
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
        <Header title="Nova sol·licitud" />
        <div className="container">
          <div data-testid="NEW_REQUEST">NewRequest</div>
          <Category
            categoriesList={categoriesList}
            onClickCategory={handleClickCategory}
          />
        </div>
      </>
    );
  }
  return '';
};

export default NewRequest;
