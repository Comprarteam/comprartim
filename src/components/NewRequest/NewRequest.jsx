import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerNewRequest } from '../../services/Requests';
import Header from '../Header/Header';
import Breadcrumbs from './Steps/Breadcrumbs';
import styles from './Steps/Breadcrumbs.scss';
import ChooseCategory from './Steps/ChooseCategory';
import ChooseProducts from './Steps/ChooseProducts';

const NewRequest = () => {
  const EMPTY_CATEGORY = {};
  const [categorySelected, setCategorySelected] = useState(EMPTY_CATEGORY);
  const history = useHistory();

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
      categoryId: categorySelected.id,
      productsList,
    };
    const response = await registerNewRequest(params);
    if (response.ok) {
      history.push(`/community/${communityId}`);
    }
  };

  const goToCategoryList = () => handleClickCategory(EMPTY_CATEGORY);
  const isFirstStep = Object.keys(categorySelected).length === 0;
  return (
    <>
      <Header title="Nova sol·licitud" />
      <Breadcrumbs
        goToCategoryList={goToCategoryList}
        isFirstStep={isFirstStep}
        categorySelected={categorySelected}
      />
      <div className="container">
        <div className={styles['requests-container']}>
          {isFirstStep
            ? (
              <ChooseCategory
                onClickCategory={handleClickCategory}
              />
            ) : (
              <ChooseProducts
                categorySelected={categorySelected}
                onClickConfirmRequest={handleClickConfirmRequest}
              />
            )}
        </div>
      </div>
    </>
  );
};

export default NewRequest;
