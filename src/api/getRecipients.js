const BASE_URL =
  'https://rolling-api.vercel.app/5-6/recipients/?limit=4&offset=0';

async function getRecipients(sort = '', url = BASE_URL) {
  var query = '';
  if (sort !== '') {
    query = `${query}&sort=${sort}`;
  }

  const response = await fetch(`${url}${query}`);

  if (!response.ok) {
    return response.status;
  }

  const result = await response.json();
  return result;
}

export default getRecipients;
