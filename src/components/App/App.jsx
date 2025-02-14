import React, {useState} from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";

function App() {
  const [newsData, setNewsData] = useState([])

  function handleSearch(data) {
    setNewsData(data)
  } 


  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main handleSearch={handleSearch} newsData={newsData} />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
