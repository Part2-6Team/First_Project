import { useState, useEffect } from 'react';
import getRequest from '../api/getRequest';

export default function useReactions({ id, limit, offset }) {
  const [reactions, setReaction] = useState();

  useEffect(() => {
    async function getRecipients() {
      const res = await getRequest(
        `recipients/${id}/reactions/?limit=${limit}&offset=${offset}/`,
      );
      setReaction(res);
    }

    getRecipients();
  }, [id, limit, offset]);

  return reactions;
}
