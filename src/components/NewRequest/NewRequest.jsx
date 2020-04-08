import React, { useState } from 'react';
import Header from '../Header/Header';
import ChooseCategory from './ChooseCategory/ChooseCategory';

const NewRequest = () => {
  const [categorySelected, setCategorySelected] = useState('');
  const categoriesList = ['farmacia', 'peix', 'poma', 'supermercat', 'croissant', 'pollastre'];

  const handleClickCategory = (categoryClicked) => {
    setCategorySelected(categoryClicked);
  };

  return (
    <>
      <Header title="Nova sol·licitud" />
      <div className="container">
        {categorySelected === ''
          ? (
            <ChooseCategory
              categoriesList={categoriesList}
              onClickCategory={handleClickCategory}
            />
          ) : (
            <div>{ categorySelected }</div>
          )}
      </div>
    </>
  );
};

export default NewRequest;
