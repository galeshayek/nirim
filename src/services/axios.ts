import axios from "axios"
import { Form } from "../@types/types";

export async function getUsers() {
    const response = await axios.get('http://localhost:3006')
    return response
}

export async function addUser(userData: Form) {
    try {
        const response = await axios.post('http://localhost:3006', userData);
        console.log('User added:', response.data);
        return response.data; // Optionally return the added user data
    } catch (error) {
        console.error('Error adding user:');
        throw error; // Re-throw the error to handle it outside the function
    }
}