import axios from 'axios';
import {toast} from 'react-toastify'


const baseURL = 'http://127.0.0.1:8000/api/v1/'

const axiosInstance = axios.create({
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

// axiosInstance.interceptors.response.use(response => {
    
//     return response;
//  }, error => {
//    if (error.response.status === 400) {
    
//     console.log(error.response.data)
//     toast.error("Please login first")
//     window.location.href = '/login/';
//    }
//    return error;
//  });

export default axiosInstance