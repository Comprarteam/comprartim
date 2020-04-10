import React, { useEffect } from 'react';
import styles from './ChooseProducts.scss';

const ChooseProducts = ({ categorySelected, onClickConfirmRequest }) => {
  let instances;
  const productsList = [];

  const handleClickConfirm = () => {
    const { chipsData } = instances[0];

    if (chipsData.length > 0) {
      chipsData.map((product) => (
        productsList.push(product.tag)
      ));
      onClickConfirmRequest(productsList);
    }
  };

  useEffect(() => {
    const elems = document.querySelectorAll('.chips');
    const options = {
      placeholder: 'Afegeix els productes',
      secondaryPlaceholder: '+ Productes',
    };
    instances = M.Chips.init(elems, options);
  }, []);

  return (
    <>
      <p>{`El segon pas és afegir els productes que necessites del/de la ${categorySelected.name}`}</p>
      <div className={`${styles['products-chips']} chips chips-placeholder`}>
        <input className={styles['chips-input']} />
      </div>
      <div
        role="button"
        tabIndex={0}
        className={`${styles['chips-submit']} btn-small blue darken-1 white-text`}
        onClick={() => handleClickConfirm()}
        onKeyPress={() => handleClickConfirm()}
      >
        Confirmar productes
      </div>
    </>
  );
};

export default ChooseProducts;
