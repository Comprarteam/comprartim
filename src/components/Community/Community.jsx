import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import { getRequestsFromCommunity } from '../../services/requests';

const Community = () => {
  const { communityId } = useParams();
  const [requests, setRequests] = useState([]);

  const getRequests = async () => {
    const response = await getRequestsFromCommunity(communityId);
    const { data } = response;
    setRequests(data);
  };

  useEffect(() => {
    getRequests();
  }, []);

  return (
    <>
      <Header title="La meva comunitat" />
      <div className="container">
        <h1 className="vertical-container">{`List of requests of community ${communityId}`}</h1>
        <Link to="/new-request">Nova sol·licitud</Link>
        <div>
          {requests.map((request) => (
            <div>
              <span>{request.categoryId}</span>
              <span>{request.status}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Community;
