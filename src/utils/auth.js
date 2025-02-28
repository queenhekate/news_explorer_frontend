import { apiKey, checkResponse } from "./constants";

export const authorize = (email, password) => {
  return new Promise((resolve, reject) => {
    if (email === "test@example.com" && password === "password") {
      resolve({ token: "fake-jwt-token" });
    } else {
      reject(new Error("Invalid email or password"));
    }
  });
};

export const checkToken = (token) => {
  return new Promise((resolve, reject) => {
    if (token === "fake-jwt-token") {
      resolve({
        _id: "1",
        email: "test@example.com",
        username: "Elise",
      });
    } else {
      reject(new Error("Invalid token"));
    }
  });
};

export const register = (email, password, username) => {
  return new Promise((resolve, reject) => {
    if (email && password && username) {
      resolve();
    } else {
      reject(new Error("Registration failed"));
    }
  });
};

export const login = (email, password) => {
  return authorize(email, password);
};

export const getCurrentUser = (token) => {
  return checkToken(token);
};

/// To Do: Backend API Calls ///

// export const authorize = (email, password) => {
//   return fetch(`${baseURL}/signin`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${apiKey}`,
//     },
//     body: JSON.stringify({ email, password }),
//   }).then(checkResponse);
// };

// export const checkToken = (token) => {
//   return fetch(`${baseURL}/user`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${token}`,
//     },
//   }).then(checkResponse);
// };

// export function register(email, password, username) {
//   return fetch(`${baseURL}/signup`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${apiKey}`,
//     },
//     body: JSON.stringify({ email, password, username }),
//   }).then(checkResponse);
// }

// export function login(email, password) {
//   return fetch(`${baseURL}/signin`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${apiKey}`,
//     },
//     body: JSON.stringify({ email, password }),
//   }).then(checkResponse);
// }

//   export function getCurrentUser(token) {
//     return request(`${baseURL}/users/me`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         authorization: `Bearer ${token}`,
//       },
//     });
//   }



