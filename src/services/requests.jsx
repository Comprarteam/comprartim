import fetch from 'node-fetch';

const URL = 'https://cors-anywhere.herokuapp.com/europe-west1-comprartim.cloudfunctions.net';
const requestPath = 'shopping_requests';


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
  const response = await fetch(`${URL}/${communityId}/${requestPath}`, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(response);
  return response;
};
