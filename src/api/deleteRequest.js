const BASE_LINK = 'https://rolling-api.vercel.app/5-6';

async function deleteRequest(path) {
  const response = await fetch(`${BASE_LINK}/${path}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    return response.status;
  }

  return response;
}

export default deleteRequest;
