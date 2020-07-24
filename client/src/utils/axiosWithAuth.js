import axios from 'axios';

// create an instance of axios with the authentication header
export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create({
        headers:{
            'Authorization': `${token}`
        },
        baseURL: 'http://localhost:5000'
    })
}