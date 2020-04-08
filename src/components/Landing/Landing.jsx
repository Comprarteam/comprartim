import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './landing.scss';

const Landing = () => {
  const [pin, setPin] = useState('');
  const onChange = (e) => {
    setPin(e.target.value.trim());
  };

  return (
    <>
      <div className={`${styles.header} indigo accent-2 white-text`}>
        <div className="container">
          <h1>comp(Я)artim</h1>
          <h5>Evitem desplaçaments, evitem contagis</h5>
        </div>
      </div>
      <div className={`white ${styles['landing-block']}`}>
        <div className="container">
          <p>
            Comparteix les teves compres entre tots els veins
            i així minimitza el risc i el número de desplaçaments.
          </p>
          <p>{'El primer pas per poder disfrutar d\'aquest servei és:'}</p>
          <Link className="btn-large waves-effect waves-light indigo lighten-1" to="/new-community">
            <i className="material-icons left">group</i>
            Crear una comunitat
          </Link>
        </div>
      </div>
      <div className={`indigo accent-4 white-text ${styles['landing-block']}`}>
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <div className={styles['wrapper-block']}>
                <i className={`material-icons ${styles['icon-block']}`}>group</i>
                <h5 className={styles['title-block']}>Registra la teva comunitat</h5>
                <p className={styles['description-block']}>
                Crea la teva comunitat per compartir els desplaçaments a les botigues
                de proximitat.
                </p>
              </div>
            </div>
            <div className="col s12 m6">
              <div className={styles['wrapper-block']}>
                <i className={`material-icons ${styles['icon-block']}`}>share</i>
                <h5 className={styles['title-block']}>Comparteix la teva compra</h5>
                <p className={styles['description-block']}>
                Afegeix tots els productes que necessites classificats per botiga i tingues
                el control de saber si hi ha més veïns interessats en comprar al mateix lloc.
                </p>
              </div>
            </div>
            <div className="col s12 m6">
              <div className={styles['wrapper-block']}>
                <i className={`material-icons ${styles['icon-block']}`}>format_list_bulleted</i>
                <h5 className={styles['title-block']}>Tot en un sol lloc</h5>
                <p className={styles['description-block']}>
                  Veu faciliment quines compres hi ha pendents de fer a la teva comunitat
                  i ofereix-te per anar a comprar.
                </p>
              </div>
            </div>
            <div className="col s12 m6">
              <div className={styles['wrapper-block']}>
                <i className={`material-icons ${styles['icon-block']}`}>chat</i>
                <h5 className={styles['title-block']}>Xateja amb la teva comunitat</h5>
                <p className={styles['description-block']}>
                  Parla amb la gent de la teva comunitat amb el xat intern, sense necessitat de
                  compartir dades personals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`white ${styles['landing-block']}`}>
        <div className="container">
          <p>Si la teva comunitat ja està registrada, introdueix el PIN:</p>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">group</i>
              <input type="text" id="pin-input" onChange={onChange} />
              <label htmlFor="pin-input">PIN</label>
            </div>
          </div>
          <Link className="btn-large waves-effect waves-light indigo" to={`/community/${pin}`}>
            Unir-se
          </Link>
        </div>
      </div>


    </>
  );
};

export default Landing;
