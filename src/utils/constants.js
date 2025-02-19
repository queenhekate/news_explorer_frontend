export const newsData = [
    { title: "Breaking News: React is Awesome", description: "React is a powerful JavaScript library for building user interfaces.", image: "https://via.placeholder.com/150" },
    { title: "Latest Update: JavaScript Trends", description: "JavaScript continues to dominate the web development space.", image: "https://via.placeholder.com/150" },
    { title: "Tech News: New Features in CSS", description: "CSS introduces new features to make web design even more creative.", image: "https://via.placeholder.com/150" },
    { title: "AI Revolution: The Future of Tech", description: "Artificial Intelligence is changing the world at a fast pace.", image: "https://via.placeholder.com/150" },
    { title: "Web Development: A Beginner's Guide", description: "An easy guide to get started with web development.", image: "https://via.placeholder.com/150" },
  ];

  export const apiKey = "eeba31b13c6a4b148448fe6a9a67f230" 

  export const checkResponse = (res) => {
    if (res.ok){
      return res.json();
    }
    return Promise.reject(res.error)
  }

  export const baseURL = "http://localhost:3001";