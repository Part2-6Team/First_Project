const BASE_LINK = 'https://rolling-api.vercel.app';

export default async function getBackgroundImageURL() {
  const response = await fetch(`${BASE_LINK}/background-images/`);

  if (!response.ok) {
    throw new Error('배경 이미지 요청 실패');
  }

  const data = await response.json();
  return data;
}
