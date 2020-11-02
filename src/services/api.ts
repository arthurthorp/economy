import axios from 'axios';

// Produção
// https://economy.vercel.app

// Homologação
// http://localhost:3000

const api = axios.create({
  baseURL: 'https://economy.vercel.app',
});

export default api;
