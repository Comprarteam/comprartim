import React, { useEffect, useState } from 'react';
import styles from './ChooseProducts.scss';

const ChooseProducts = ({ categorySelected, onClickConfirmRequest }) => {
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);
  let instances = [];
  const productsList = [];

  const handleClickConfirm = () => {
    const { chipsData } = instances[0];
    const inputElement = document.querySelector('.chips .input');
    if (inputElement && inputElement.value !== '') {
      productsList.push(inputElement.value);
    }
    if (chipsData.length > 0 || productsList.length > 0) {
      setAlreadySubmitted(true);
      chipsData.forEach((product) => {
        productsList.push(product.tag);
      });
      onClickConfirmRequest(Array.from(new Set(productsList)));
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
    <div className={styles.products}>
      <p>{`Què necessites ${categorySelected.name === 'Supermercat' ? 'del' : 'de la'} ${categorySelected.name}?`}</p>
      <div className={`${styles['products-chips']} chips chips-placeholder`}>
        <input className={styles['chips-input']} />
      </div>
      <div className="center">
        <button
          type="button"
          disabled={alreadySubmitted}
          tabIndex={0}
          className={`${styles['chips-submit']} btn-small indigo lighten-1 white-text`}
          onClick={() => handleClickConfirm()}
          onKeyPress={() => handleClickConfirm()}
        >
          <i className="material-icons left">check</i>
          Confirmar productes
        </button>
      </div>
    </div>
  );
};

export default ChooseProducts;
