import { useState, useEffect } from 'react';
import getRequest from '../api/getRequest';

export default function useRecipients(id) {
  const [recipients, setRecipients] = useState();

  useEffect(() => {
    async function getRecipients() {
      const res = await getRequest(`recipients/${id}/`);
      setRecipients(res);
    }

    getRecipients();
  }, [id]);

  return recipients;
}
