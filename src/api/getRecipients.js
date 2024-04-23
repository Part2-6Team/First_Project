const BASE_URL = 'https://rolling-api.vercel.app/5-6';

async function getRecipients(offset = '1', sort = 'like') {
  const query = `?limit=4&offset=${offset}&sort=${sort}`;
  const response = await fetch(`${BASE_URL}/recipients/${query}`);

  if (!response.ok) {
    return response.status;
  }

  const result = await response.json();
  return result;
}

export default getRecipients;
