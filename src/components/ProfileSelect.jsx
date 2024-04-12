import { useState } from 'react';
import { styled } from 'styled-components';
import profileImages from '../assets/profile';
import defaultProfileImage from '../assets/profile/0.png';

function ProfileSelect() {
  const [selected, setSelected] = useState(defaultProfileImage);

  const handleClickProfileImage = (e) => {
    setSelected(e.target.value);
  };

  return (
    <ProfileSelectWrapper>
      <img className="selectedProfile" src={selected} alt="선택한 이미지" />
      <ProfileImageListWrapper>
        <p className="description">프로필 이미지를 선택해주세요!</p>
        <div className="profileImageList">
          {profileImages.map((profile) => (
            <label key={profile.name} className="profileLabel">
              <input
                type="radio"
                className="input-hidden"
                value={profile.img}
                checked={selected === `${profile.name}`}
                onChange={handleClickProfileImage}
              />
              <img
                className="profileImage"
                src={profile.img}
                alt="프로필 이미지"
              />
            </label>
          ))}
        </div>
      </ProfileImageListWrapper>
    </ProfileSelectWrapper>
  );
}

const ProfileSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  .selectedProfile {
    width: 80px;
    height: 80px;
    border-radius: 100px;
    border: 3px solid var(--Gray-200);
  }
`;

const ProfileImageListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .description {
    color: var(--Gray-500);
    font-family: Pretendard;
    margin: 0;
  }

  .profileImageList {
    display: flex;
    gap: 5px;
    width: 605px;
    height: 56px;
  }

  .input-hidden {
    position: absolute;
    visibility: hidden;
  }

  .profileImage {
    width: 56px;
    height: 56px;
    border-radius: 50px;
    border: 1px solid var(--Gray-200);
  }
`;

export default ProfileSelect;
