import { useState } from 'react';
import profileImages from '../assets/profile';

function ProfileSelect() {
  const [selected, setSelected] = useState();

  const handleClickProfileImage = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div>
      {profileImages.map((profile) => (
        <label key={profile.name}>
          <input
            type="radio"
            className="input-hidden"
            value={profile.name}
            checked={selected === `${profile.name}`}
            onChange={handleClickProfileImage}
          />
          <img src={profile.img} alt="프로필 이미지" />
        </label>
      ))}
    </div>
  );
}

export default ProfileSelect;
