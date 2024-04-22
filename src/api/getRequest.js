const BASE_LINK = 'https://rolling-api.vercel.app/5-6';

async function getRequest(path) {
  const response = await fetch(`${BASE_LINK}/${path}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    return response.status;
  }

  const result = await response.json();
  return result;
}

export default getRequest;
