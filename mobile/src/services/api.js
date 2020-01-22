import axios from 'axios';

const api = axios.create({
  baseURL = '192.168.42.52:3001',
});

export default api;
