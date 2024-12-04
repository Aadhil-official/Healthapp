// import axios from 'axios';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

// const API_URL = 'https://your-api-endpoint.com';

export const registerUser = async (userData) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
        // response.user
        return response.user;
    } catch (error) {
        throw new Error(error.message || 'Registration failed');
        // throw new Error(error.response?.data?.message || 'Registration failed');
    }
};
