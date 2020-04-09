import fetch from 'node-fetch';
import Requests from '../domain/Requests';

const URL = 'https://europe-west1-comprartim.cloudfunctions.net';
const requestPath = 'shopping_requests';

const parseRequests = (data) => new Requests(data);

export const registerNewRequest = async (params) => (
  fetch(`${URL}/${requestPath}`, {
    method: 'post',
    body: JSON.stringify(params),
    headers: { 'Content-Type': 'application/json' },
  })
);

export const getRequestsFromCommunity = async (communityId) => {
  const response = await fetch(`${URL}/communities/${communityId}/${requestPath}`, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  });
  const responseJSON = await response.json();
  return parseRequests(responseJSON);
};

export const actionRequest = async (requestId, actionId, action) => (
  fetch(`${URL}/${requestPath}/${requestId}/${action}`, {
    method: 'put',
    body: JSON.stringify(actionId),
    headers: { 'Content-Type': 'application/json' },
  })
);
