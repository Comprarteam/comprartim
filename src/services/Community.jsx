import fetch from 'node-fetch';
import { Community, NewCommunity } from '../domain/Community';

const url = 'https://europe-west1-comprartim.cloudfunctions.net/communities';

const parseRegisterNewCommunity = (data) => new NewCommunity(data);
const parseCommunity = (data) => new Community(data);

export const registerNewCommunity = async (name) => {
  const response = await fetch(url, {
    method: 'post',
    body: JSON.stringify({ name }),
    headers: { 'Content-Type': 'application/json' },
  });
  const responseJSON = await response.json();
  return parseRegisterNewCommunity(responseJSON);
};

export const getCommunity = async (id) => {
  const response = await fetch(`${url}/${id}`, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  });
  const responseJSON = await response.json();
  return parseCommunity(responseJSON);
};
