import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import ChooseCategory from './Steps/ChooseCategory';
import ChooseProducts from './Steps/ChooseProducts';
import { registerNewRequest } from '../../services/requests';

const NewRequest = () => {
  const [categorySelected, setCategorySelected] = useState('');
  const history = useHistory();
  const categoriesList = ['farmacia', 'peix', 'poma', 'supermercat', 'croissant', 'pollastre'];
  let communityId = '1';

  if (window.localStorage) {
    communityId = window.localStorage.getItem('communityId');
  }

  const handleClickCategory = (categoryClicked) => {
    setCategorySelected(categoryClicked);
  };

  const handleClickConfirmRequest = async (productsList) => {
    const params = {
      communityId,
      ownerId: 'userTest',
      categoryId: categorySelected,
      productsList,
    };
    const response = await registerNewRequest(params);
    if (response.ok) {
      history.push(`/community/${communityId}`);
    }
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
            <ChooseProducts
              categorySelected={categorySelected}
              onClickConfirmRequest={handleClickConfirmRequest}
            />
          )}
      </div>
    </>
  );
};

export default NewRequest;
