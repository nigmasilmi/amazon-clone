import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5001/clone-3e6cf/us-central1/api' //api (cloud function) url
});

export default axiosInstance;