import { apiKey, checkResponse } from "./constants";

export const authorize = (email, password) => {
  // Pretend we did a fetch request that gave us back a token
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token" });
  });
};

export const checkToken = (token) => {
  // Pretend we did a fetch request that gave us back a user
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "fake user", email: "fake@example.com", _id: "fake-id" },
    });
  });
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



