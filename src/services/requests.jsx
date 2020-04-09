import fetch from 'node-fetch';
import Request from '../domain/Request';

const URL = 'https://europe-west1-comprartim.cloudfunctions.net';
const requestPath = 'shopping_requests';

const parseRequests = (data) => new Request(data);

export const registerNewRequest = async (params) => {
  const response = await fetch(`${URL}/${requestPath}`, {
    method: 'post',
    body: JSON.stringify(params),
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(response);
  return response;
};

export const getRequestsFromCommunity = async (communityId) => {
  const response = await fetch(`${URL}/communities/${communityId}/${requestPath}`, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  });
  const responseJSON = await response.json();
  return parseRequests(responseJSON);
};
