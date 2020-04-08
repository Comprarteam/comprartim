import fetch from 'node-fetch';
import NewCommunity from '../domain/NewCommunity';

const url = 'https://europe-west1-comprartim.cloudfunctions.net/communities';

const parseRegisterNewCommunity = (data) => new NewCommunity(data);

const registerNewCommunity = async (name) => {
  const response = await fetch(url, {
    method: 'post',
    body: JSON.stringify({ name }),
    headers: { 'Content-Type': 'application/json' },
  });
  const responseJSON = await response.json();
  return parseRegisterNewCommunity(responseJSON);
};

export default registerNewCommunity;
