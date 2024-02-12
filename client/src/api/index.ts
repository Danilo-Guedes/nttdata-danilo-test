import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5000, // Set the timeout value in milliseconds
  headers: {
    'Content-Type': 'application/json', // Set the request content type
  },
});


export default apiClient;
