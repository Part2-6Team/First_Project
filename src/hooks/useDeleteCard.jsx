import { useEffect, useState } from 'react';
import deleteRequest from '../api/deleteRequest';

function useDeleteCard(cardId) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const deleteCard = async () => {
      setIsLoading(true);
      // API 호출
      deleteRequest(`messages/${cardId}/`);
      setIsLoading(false);
    };

    deleteCard();
  }, [cardId]);

  return { isLoading };
}

export default useDeleteCard;
