import { baseURL, apiKey, checkResponse } from "./constants";

export const authorize = (email, password) => {
  return fetch(`${baseURL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

export const checkToken = (token) => {
  return fetch(`${baseURL}/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  }).then(checkResponse);
};

export function register(email, password, username) {
  return fetch(`${baseURL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ email, password, username }),
  }).then(checkResponse);
}

export function login(email, password) {
  return fetch(`${baseURL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
}

  export function getCurrentUser(token) {
    return request(`${baseURL}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
  }



