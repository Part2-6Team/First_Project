import { useCallback, useEffect, useState } from 'react';
import getRequest from '../api/getRequest';

export default function useReactions({ id, limit, offset }) {
  const [reactions, setReaction] = useState();

  const getReactions = useCallback(
    async (recipientsId, getLimit, getOffset) => {
      const res = await getRequest(
        `recipients/${recipientsId}/reactions/?limit=${getLimit}&offset=${getOffset}/`,
      );
      setReaction(res);
    },
    [],
  );

  useEffect(() => {
    getReactions(id, limit, offset);
  }, [id, limit, offset, getReactions]);

  return { reactions, getReactions };
}
