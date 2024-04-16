const BASE_LINK = 'https://rolling-api.vercel.app/5-6';

async function postMessage(sendData) {
  const { recipientId } = sendData;
  const response = await fetch(
    `${BASE_LINK}/recipients/${recipientId}/messages/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendData),
    },
  );

  if (!response.ok) {
    throw new Error('메세지를 저장하는 데 실패했습니다.');
  }

  const result = await response.json();
  return result;
}

export default postMessage;
