import React from 'react';
import styles from './requests.scss';

const Requests = ({ routeProps }) => {
  const { communityId } = routeProps.match.params;

  return (
    <>
      <h1 className="vertical-container">{`List of requests of community ${communityId}`}</h1>
      <div className={styles['categories-text']}>Categories</div>
      <div>
        <span className="icon-farmacia" />
        <span>farmacia</span>
      </div>
      <div>
        <span className="icon-peix" />
        <span>peix</span>
      </div>
      <div>
        <span className="icon-poma" />
        <span>poma</span>
      </div>
      <div>
        <span className="icon-supermercat" />
        <span>supermercat</span>
      </div>
      <div>
        <span className="icon-croissant" />
        <span>croissant</span>
      </div>
      <div>
        <span className="icon-pollastre" />
        <span>pollastre</span>
      </div>
    </>
  );
};

export default Requests;
