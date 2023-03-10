import { useEffect, useRef, useReducer } from 'react';

import axios from '../api/axios';

type stateType = {
  status: string;
  error?: string | null;
  data?: actionType[];
};

type actionType = {
  type: string;
  payload?: [];
};

export const useFetch = (url: string) => {
  const cache = useRef<any>({});

  const initialState = {
    status: 'idle',
    error: null,
    data: [],
  };

  const [state, dispatch] = useReducer((state: any, action: actionType) => {
    switch (action.type) {
      case 'FETCHING':
        return { ...initialState, status: 'fetching' };
      case 'FETCHED':
        return { ...initialState, status: 'fetched', data: action.payload };
      case 'FETCH_ERROR':
        return { ...initialState, status: 'error', error: action.payload };
      default:
        return state;
    }
  }, initialState);

  useEffect(() => {
    let cancelRequest = false;

    if (!url || !url.trim()) {
      dispatch({ type: 'FETCHED', payload: [] });
      return function cleanup() {
        cancelRequest = true;
      };
    }

    const fetchData = async () => {
      dispatch({ type: 'FETCHING' });
      if (cache.current[url]) {
        console.log('from cache');
        const data = cache.current[url];
        dispatch({ type: 'FETCHED', payload: data.data });
      } else {
        console.log('from api');
        const data = await axios.get(url);
        cache.current[url] = data;
        if (cancelRequest) return;
        dispatch({ type: 'FETCHED', payload: data.data });
      }
    };

    fetchData();
    return function cleanup() {
      cancelRequest = true;
    };
  }, [url]);

  return state;
};
