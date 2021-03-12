import axios from 'axios';

const baseURL = window.location.origin + '/api/v1/';

const axiosInstance = axios.create({
    // axios instance that will send requests to API endpoints and provide authentication
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem('access_token')
        ? 'Token ' + localStorage.getItem('access_token')
        : null,
        'Content-Type': 'application/json',
        accept: 'application/json'
    }
});

export default axiosInstance