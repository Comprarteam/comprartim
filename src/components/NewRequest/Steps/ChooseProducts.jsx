import React, { useEffect } from 'react';
import styles from './ChooseProducts.scss';

const ChooseProducts = ({ categorySelected, onClickConfirmRequest }) => {
  const products = ['500g de vedella', '200g de pernil salat', '3 butifarres'];
  let instances;

  useEffect(() => {
    const elems = document.querySelectorAll('.chips');
    const options = {
      placeholder: 'Afegeix els productes',
      secondaryPlaceholder: '+Productes',
    };
    instances = M.Chips.init(elems, options);
    console.log(instances);
  }, []);

  return (
    <>
      <p>{`El segon pas és afegir els productes que necessites del/de la ${categorySelected.name}`}</p>
      <div className={`${styles['products-chips']} chips chips-placeholder`} />
      <div>{`Els productes de la teva sol·licitud per a ${categorySelected.name} són:`}</div>
      <div>
        <ul>
          {products.map((product) => (
            <li>{product}</li>
          ))}
        </ul>
        <div
          role="button"
          tabIndex={0}
          className="btn-large waves-effect waves-light indigo lighten-1"
          onClick={() => onClickConfirmRequest(products)}
          onKeyPress={() => onClickConfirmRequest(products)}
        >
            Registra aquesta sol·licitud
        </div>
      </div>
    </>
  );
};

export default ChooseProducts;
