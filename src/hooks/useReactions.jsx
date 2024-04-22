import { useEffect, useState } from 'react';
import getRequest from '../api/getRequest';

export default function useReactions({ id, limit, offset }) {
  const [reactions, setReaction] = useState();

  async function getReactions(recipientsId, getLimit, getOffset) {
    const res = await getRequest(
      `recipients/${recipientsId}/reactions/?limit=${getLimit}&offset=${getOffset}/`,
    );
    setReaction(res);
  }

  useEffect(() => {
    getReactions(id, limit, offset);
  }, []);

  return { reactions, getReactions };
}
