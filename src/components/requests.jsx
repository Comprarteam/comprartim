import React from 'react';

const Requests = ({ routeProps }) => {
  const { communityId } = routeProps.match.params;

  return (
    <>
      <h1 className="vertical-container">{`List of requests of community ${communityId}`}</h1>
    </>
  );
};

export default Requests;
