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
        data: { name: "fake user", email: "fake@example,com", _id: "fake-id" },
      });
    });
  };

  // export function register(email, password, username) {
  //   return request(`${baseUrl}/signup`, {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email,
  //       password,
  //       username
  //     }),
  //   });
  // }
  
  // export function login(email, password) {
  //   console.log(">>login", email);
  //   return request(`${baseUrl}/signin`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email,
  //       password,
  //     }),
  //   });
  // }
  
  // export function getCurrentUser(token) {
  //   return request(`${baseUrl}/users/me`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       authorization: `Bearer ${token}`,
  //     },
  //   });
  // }
