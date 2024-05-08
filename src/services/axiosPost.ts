import axios from 'axios';
const baseUrl = 'https://kxfar6smac.execute-api.us-east-2.amazonaws.com/prod/';

export const postEmail = (data: object) => {
    const json = JSON.stringify(data)
    return axios.post(baseUrl, json)
}