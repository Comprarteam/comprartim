import React, { useEffect } from 'react';
import { QRCode } from 'react-qr-svg';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import styles from './PrintPage.scss';

const PrintPage = () => {
  const { communityId } = useParams();
  const url = document.location.href.split('/print')[0];
  const onClickRefresh = () => window.location.reload();

  useEffect(() => {
    window.print();
  });

  return (
    <div className={styles['print-page']}>
      <div className={styles['non-printing-zone']}>
        <Header title="Imprimir" backUrl={`/community/${communityId}`} />
        <div className={`container ${styles.container}`}>
          <div className={styles['btn-wrapper']}>
            <button
              type="button"
              onClick={onClickRefresh}
              className="btn-large waves-effect waves-light indigo lighten-1"
            >
              Tornar a Imprimir
            </button>
          </div>
        </div>
      </div>
      <div className={styles['printing-zone']}>
        <div className={styles.title}>comp(Я)artim</div>
        <div className={styles.subtitle}>Evitem desplaçaments, evitem contagis</div>
        <div className={styles.description}>
          <p className={styles.text}>
            Tens persones molt a prop teu disposades a ajudar-te a fer la compra i
            reduir els desplaçaments que has de realitzar.
          </p>
          <p className={styles.text}>
            Aquí pots veure el llistat de productes que els teus veïns demanen i
            afegir els teus a la llista.
          </p>
        </div>

        <div className={styles['qr-container']}>
          <div className={styles['qr-wrapper']}>
            <QRCode
              bgColor="#FFFFFF"
              fgColor="#000000"
              level="M"
              style={{ width: 370 }}
              value={url}
            />
            <div className={styles['logo-wrapper']}>
              <img src="./icons/icon.png" alt="" />
            </div>
          </div>
          <p className={styles.link}>{url}</p>
        </div>
        <p className={styles.text}>El teu codi de comunitat és</p>
        <p className={styles.pin}>{communityId}</p>
      </div>
    </div>
  );
};

export default PrintPage;
