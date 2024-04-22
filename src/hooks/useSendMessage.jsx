import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import postMessage from '../api/postMessage';

function useSendMessage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [senderName, setSenderName] = useState('');
  const [profileImage, setProfileImage] = useState(
    'https://i.ibb.co/zQGbzDz/image.png',
  );
  const [relation, setRelation] = useState('지인');
  const [message, setMessage] = useState('');
  const [messageValid, setMessageValid] = useState(false);
  const [font, setFont] = useState('Noto Sans');
  const [isFormValid, setIsFormVaild] = useState(false);

  const sendingData = {
    recipientId: id,
    sender: senderName,
    profileImageURL: profileImage,
    relationship: relation,
    content: message,
    font,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postMessage(sendingData);
    navigate(`/post/${id}`);
  };

  useEffect(() => {
    const handleFormValid = () => {
      if (senderName !== '' && messageValid !== false) {
        setIsFormVaild(true);
      } else {
        setIsFormVaild(false);
      }
    };
    handleFormValid();
  }, [senderName, messageValid]);

  return {
    setSenderName,
    setProfileImage,
    setRelation,
    setMessage,
    setMessageValid,
    setFont,
    isFormValid,
    handleSubmit,
  };
}

export default useSendMessage;
