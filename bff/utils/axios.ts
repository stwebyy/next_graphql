import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:4010/',
  headers: {
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Origin': 'https://studio.apollographql.com',
    'Access-Control-Allow-Credentials': true,
  },
  responseType: 'json',
});
