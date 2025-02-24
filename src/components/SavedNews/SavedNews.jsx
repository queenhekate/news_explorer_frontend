import "./SavedNews.css";
import Navigation from "../Navigation/Navigation";
import NewsCard from "../NewsCard/NewsCard";
import Footer from "../Footer/Footer";

function SavedNews() {
    return (
      <div className="SavedNews">
        <Navigation />
        <NewsCard />
        <Footer />
      </div>
    );
  }
  
  export default SavedNews;
