import React from 'react';
import { Link } from 'react-router-dom';

const Community = ({ routeProps }) => {
  const { communityId } = routeProps.match.params;

  return (
    <>
      <Link to={`/community/${communityId}/print`}>Imprimir</Link>
      <h1 className="vertical-container">{`List of requests of community ${communityId}`}</h1>
      <Link to="/new-request">Nova sol·licitud</Link>
    </>
  );
};

export default Community;
