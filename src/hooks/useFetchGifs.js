import { useEffect, useState } from 'react';
import { getGifts } from '../helpers/getGifs';

const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifts(category).then(images => {
      setState({
        data: images,
        loading: false,
      });
    });
  }, [category]);

  return state;
};

export default useFetchGifs;
