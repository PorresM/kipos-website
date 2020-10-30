import axios from 'axios';
import router from '@/router/index';

const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config: any) => {
        const token = localStorage.getItem("token");
        if (token != null && token !== "undefined") {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
)

// Add a response interceptor to handle response
axiosInstance.interceptors.response.use((response: any) => response, (error: { response: { status: number; }; }) => {
    if (error.response.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        router.push('/login');
    }
    return Promise.reject(error);
});

export default axiosInstance;
