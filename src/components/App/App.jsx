import React, {useState, useEffect} from "react";
import "./App.css";
import Preloader from '../Preloader/Preloader';
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";

function App() {
  const [newsData, setNewsData] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call with setTimeout
    setTimeout(() => {
      fetchData();
    }, 2000); // 2 seconds delay to simulate loading
  }, []);

  const fetchData = async () => {
    // Simulate fetching data
    // You can replace this with your actual API call, like:
    // const response = await fetch('https://api.example.com');
    // const result = await response.json();

    // For this example, we directly set the data
    const result = [
      { id: 1, title: 'News 1', description: 'Description of News 1' },
      { id: 2, title: 'News 2', description: 'Description of News 2' },
    ];
    
    setData(result);
    setLoading(false); // Set loading to false when data is fetched
  };

  // function handleSearch(data) {
  //   setNewsData(data)
  // } 


  return (
    <div className="page">
       {loading ? (
        <Preloader />
      ) : (
      <div className="page__content">
        <Header />
        <Main handleSearch={handleSearch} newsData={newsData} />
        <About />
        <Footer />
      </div>
      )}
    </div>
  );
}

export default App;

