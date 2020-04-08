import fetch from 'node-fetch';

const url = 'https://europe-west1-comprartim.cloudfunctions.net/shopping_requests';

const registerNewRequest = async (params) => {
  const response = await fetch(url, {
    method: 'post',
    body: JSON.stringify(params),
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(response);
  return response;
};

export default registerNewRequest;
