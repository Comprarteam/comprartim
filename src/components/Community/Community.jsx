import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../Header/Header';

const Community = () => {
  const { communityId } = useParams();

  return (
    <>
      <Header title="La meva comunitat" />
      <div className="container">
        <h1 className="vertical-container">{`List of requests of community ${communityId}`}</h1>
        <Link to="/new-request">Nova sol·licitud</Link>
      </div>
    </>
  );
};

export default Community;
