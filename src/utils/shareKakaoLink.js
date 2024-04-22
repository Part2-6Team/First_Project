const KAKAO_JS_KEY = import.meta.env.VITE_KAKAO_JS_KEY;

export default function shareKakao(route, title) {
  // url이 id값에 따라 변경되기 때문에 route를 인자값으로 받아줌
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(KAKAO_JS_KEY); // 카카오에서 제공받은 javascript key를 넣어줌 -> .env파일에서 호출시킴
    }

    kakao.Link.sendDefault({
      objectType: 'feed', // 카카오 링크 공유 여러 type들 중 feed라는 타입 -> 자세한 건 카카오에서 확인
      content: {
        title, // 인자값으로 받은 title
        description: '나만의 롤링페이퍼를 만들어 봅시다!', // 인자값으로 받은 title
        imageUrl: '이미지 url',
        link: {
          mobileWebUrl: route, // 인자값으로 받은 route(uri 형태)
          webUrl: route,
        },
      },
      buttons: [
        {
          title,
          link: {
            mobileWebUrl: route,
            webUrl: route,
          },
        },
      ],
    });
  }
}
