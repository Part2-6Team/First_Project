export const getBackgroundImageURL = async () => {
    const res = await fetch('https://rolling-api.vercel.app/background-images/');
    if (!res.ok) {
      throw new Error('배경 이미지 불러오기 실패');
    }
    const data = await res.json();
    return data;
  };