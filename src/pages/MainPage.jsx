import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import GlobalNav from '../components/GlobalNav';
import SiteInfo from '../components/SiteInfo';
import Button from '../components/Button';
import device from '../config';
import siteImage1 from '../assets/siteInfo1.png';
import siteImage2 from '../assets/siteInfo2.png';

const SITE_INFOS = [
  {
    dir: 'ltr',
    index: '01',
    title: '누구나 손쉽게, 온라인\n롤링 페이퍼를 만들 수 있어요',
    message: '로그인 없이 자유롭게 만들어요',
    imgUrl: siteImage1,
  },
  {
    dir: 'rtl',
    index: '02',
    title: '서로에게 이모지로 감정을\n표현해보세요',
    message: '롤링 페이퍼에 이모지를 추가할 수 있어요',
    imgUrl: siteImage2,
  },
];

function MainPage() {
  const navigate = useNavigate();

  const handleClickReadMore = () => {
    navigate('/post/list');
  };

  return (
    <div>
      <GlobalNav hasButton />
      <Content>
        <SiteInfoWrapper>
          <SiteInfo
            dir={SITE_INFOS[0].dir}
            index={SITE_INFOS[0].index}
            title={SITE_INFOS[0].title}
            message={SITE_INFOS[0].message}
            imgUrl={SITE_INFOS[0].imgUrl}
          />
          <SiteInfo
            dir={SITE_INFOS[1].dir}
            index={SITE_INFOS[1].index}
            title={SITE_INFOS[1].title}
            message={SITE_INFOS[1].message}
            imgUrl={SITE_INFOS[1].imgUrl}
          />
          <Button
            className="readMore"
            size={280}
            shape={56}
            onClick={handleClickReadMore}
          >
            구경해보기
          </Button>
        </SiteInfoWrapper>
      </Content>
    </div>
  );
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 24px;
`;

const SiteInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media ${device.pc_small} {
    .readMore {
      width: calc(100vw - 48px);
    }
  }
`;

export default MainPage;
