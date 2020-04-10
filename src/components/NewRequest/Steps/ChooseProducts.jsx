import React, { useEffect, useState } from 'react';
import styles from './ChooseProducts.scss';

const ChooseProducts = ({ categorySelected, onClickConfirmRequest }) => {
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);
  let instances = [];
  const productsList = [];

  const handleClickConfirm = () => {
    const { chipsData } = instances[0];

    if (chipsData.length > 0) {
      setAlreadySubmitted(true);
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
    <div className={styles.products}>
      <p>{`Qùe necessites de la ${categorySelected.name}?`}</p>
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
