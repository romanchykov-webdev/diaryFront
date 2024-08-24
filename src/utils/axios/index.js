import axios from "axios";

// const token = sessionStorage.getItem("token");

export const instance = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

// export const instanceAuth = axios.create({
//     baseURL: 'http://localhost:5000',
//     timeout: 1000,
//     headers: {
//         'X-Custom-Header': 'foobar',
//         Authorization: `Bearer ${token}`
//     }
// });


export const instanceAuth = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});


// Интерсептор для добавления токена
instanceAuth.interceptors.request.use(config => {
    const token = sessionStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

