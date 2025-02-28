export const newsData = [
    { title: "Breaking News: React is Awesome", description: "React is a powerful JavaScript library for building user interfaces.", image: "https://via.placeholder.com/150" },
    { title: "Latest Update: JavaScript Trends", description: "JavaScript continues to dominate the web development space.", image: "https://via.placeholder.com/150" },
    { title: "Tech News: New Features in CSS", description: "CSS introduces new features to make web design even more creative.", image: "https://via.placeholder.com/150" },
    { title: "AI Revolution: The Future of Tech", description: "Artificial Intelligence is changing the world at a fast pace.", image: "https://via.placeholder.com/150" },
    { title: "Web Development: A Beginner's Guide", description: "An easy guide to get started with web development.", image: "https://via.placeholder.com/150" },
  ];

export const newsApiBaseUrl = process.env.NODE_ENV === "production" 
  ? "https://nomoreparties.co/news/v2/everything"
  : "https://newsapi.org/v2/everything";

  export default newsApiBaseUrl;

  export const checkResponse = (res) => {
    if (res.ok){
      return res.json();
    }
    return Promise.reject(res.error)
  }

  export const baseURL = "http://localhost:3001";