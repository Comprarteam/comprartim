import React from 'react';

const ChooseProducts = ({ categorySelected, onClickConfirmRequest }) => {
  const products = ['500g de vedella', '200g de pernil salat', '3 butifarres'];

  return (
    <>
      <p>{`El segon pas és afegir els productes que necessites del/de la ${categorySelected}`}</p>

      <div>{`Els productes de la teva sol·licitud per a ${categorySelected} són:`}</div>
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
