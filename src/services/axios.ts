import axios from "axios";
export const baseUrl = 'http://nirim-site-env.eba-5jpqpx6x.us-east-2.elasticbeanstalk.com/api/v1'
export const localUrl = 'http://localhost:8080/api/v1'
export async function getUsers() {
    const response = await axios.get(`${baseUrl}/users/all`)
    return response
}
