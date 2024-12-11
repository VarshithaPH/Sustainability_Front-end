import axios from "axios";

// Set up the base URL for your backend
const API_URL = "http://localhost:8080"; // Adjust if your backend URL is different

// Create an Axios instance with default configurations
const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

// Add Authorization Token to request headers (if authenticated)
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token"); // You can store JWT token in localStorage/sessionStorage
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;
