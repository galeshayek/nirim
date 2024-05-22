import axios from 'axios';
import { baseUrl } from './axios';

export const postEmail = (data: object) => {
    const json = JSON.stringify(data)
    return axios.post(`${baseUrl}/users/create`, json, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}