import axios from 'axios';

const api = axios.create({
  //backend address
  baseURL: 'https://proffy-api-beni.herokuapp.com/'
});

export default api;
