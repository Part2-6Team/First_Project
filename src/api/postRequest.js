const BASE_LINK = 'https://rolling-api.vercel.app/5-6';

export default async function postRequest(path, data, token = null) {
  const response = await fetch(`${BASE_LINK}/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('postRequest Error');
  }

  const result = await response.json();
  return result;
}
