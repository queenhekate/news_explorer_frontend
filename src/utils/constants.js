export const newsApiBaseUrl = process.env.NODE_ENV === "production" 
  ? "https://nomoreparties.co/news/v2/everything"
  : "https://newsapi.org/v2/everything";

// const newsApiBaseUrl = "/v2/everything";
export default newsApiBaseUrl;

  export const checkResponse = (res) => {
    if (res.ok){
      return res.json();
    }
    return Promise.reject(res.error)
  }

  export const baseURL = "http://localhost:3001";