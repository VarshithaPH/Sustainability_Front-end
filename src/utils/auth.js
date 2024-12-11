// auth.js - Utility functions for handling authentication

// Get the JWT token from localStorage (or sessionStorage)
export const getToken = () => {
    return localStorage.getItem("token"); // or sessionStorage.getItem("token") based on your preference
};

// Save the JWT token to localStorage
export const saveToken = (token) => {
    localStorage.setItem("token", token);
};

// Remove the JWT token from localStorage (e.g., on logout)
export const removeToken = () => {
    localStorage.removeItem("token");
};

// Check if the user is authenticated by verifying the presence of the token
export const isAuthenticated = () => {
    const token = getToken();
    if (!token) {
        return false; // No token means the user is not authenticated
    }

    // Optional: You can decode the token here and check its validity/expiration
    // For example, if you're using JWT, check if the token is expired
    const decodedToken = decodeJwt(token);
    if (decodedToken && decodedToken.exp < Date.now() / 1000) {
        removeToken(); // Token expired, remove it
        return false;
    }

    return true;
};

// Decode the JWT token to extract useful info like the user role or expiration date
export const decodeJwt = (token) => {
    try {
        return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
        return null;
    }
};

// This can be used to handle user roles or permissions for different parts of the app
export const getUserRole = () => {
    const token = getToken();
    if (token) {
        const decodedToken = decodeJwt(token);
        return decodedToken ? decodedToken.role : null;
    }
    return null;
};
