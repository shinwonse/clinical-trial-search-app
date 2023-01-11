import axios from 'axios';

export const fetchResult = (query: string) =>
  axios.get(`http://localhost:8000/sick?q=${query}`);
