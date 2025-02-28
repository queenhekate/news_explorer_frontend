// const newsApiBaseUrl = process.env.NODE_ENV === "production" 
//   ? "https://nomoreparties.co/news/v2/everything"
//   : "https://newsapi.org/v2/everything";

const apiKey = "eeba31b13c6a4b148448fe6a9a67f230"

  const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return res.text().then((text) => {
      try {
        return JSON.parse(text);
      } catch (error) {
        return Promise.reject(new Error("Invalid JSON response"));
      }
    });
  };

const baseURL = "http://localhost:3000";

export {apiKey, checkResponse, baseURL};

     