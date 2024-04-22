import { styled } from 'styled-components';
import profileImages from '../assets/profile/index';
import useProfileSelect from '../hooks/useProfileSelect';
import device from '../config';

function ProfileSelect({ handleChange }) {
  const { selected, handleClickProfileImage } = useProfileSelect(handleChange);

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

  @media ${device.mobile} {
    max-height: 200px;
  }
`;

const ProfileImageListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .description {
    color: var(--Gray-500);
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 400;
    margin: 0;
  }

  .profileImageList {
    display: flex;
    gap: 5px;
    max-width: 605px;
    max-height: 112px;
    flex-wrap: wrap;
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
