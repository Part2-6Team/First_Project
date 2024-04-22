import { useState, useEffect } from 'react';
import getRequest from '../api/getRequest';

export default function useRecipients(id) {
  const [recipients, setRecipients] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let res;
    async function getRecipients() {
      setIsLoading(true);
      res = await getRequest(`recipients/${id}/`);
      setIsLoading(false);
      setRecipients(res);

      if (res === 404) {
        setRecipients(404);
      }
    }

    getRecipients();
  }, [id]);

  return { recipients, isLoading };
}
