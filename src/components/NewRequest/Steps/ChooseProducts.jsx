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
    <div className={styles.products}>
      <p>{`Qùe necessites de la ${categorySelected.name}?`}</p>
      <div className={`${styles['products-chips']} chips chips-placeholder`}>
        <input className={styles['chips-input']} />
      </div>
      <div
        role="button"
        tabIndex={0}
        className={`${styles['chips-submit']} btn-small indigo lighten-1 white-text`}
        onClick={() => handleClickConfirm()}
        onKeyPress={() => handleClickConfirm()}
      >
        Confirmar productes
      </div>
    </div>
  );
};

export default ChooseProducts;
