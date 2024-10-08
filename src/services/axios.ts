import axios from "axios";
export const baseUrl = 'https://nirimserver.space/api/v1'
export const localUrl = 'http://localhost:8080/api/v1'
export async function getUsers() {
    const response = await axios.get(`${baseUrl}/users/all`)
    return response
}
