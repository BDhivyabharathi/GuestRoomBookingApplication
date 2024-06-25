// necessary modules
import axios from 'axios';

// Create an instance of axios
const api = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Export the api instance
export default api;