import { useContext } from "react";
import "./SavedNews.css";
import Navigation from "../Navigation/Navigation";
import Profile from "../Profile/Profile";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import { CurrentUserContext } from "../../context/CurrentUserContext";

function SavedNews({
  savedArticles,
  onDeleteArticle,
  isLoggedIn,
  searchQuery,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  console.log("savedArticles:", savedArticles); // Log the savedArticles array
  return (
    <div className="savedNews">
      <Navigation />
      <Profile savedArticles={savedArticles} searchQuery={searchQuery} />
      <div className="savedNews__content">
        {savedArticles.map((card) => {
          console.log("Current card:", card); // Log each card object
          return (
            <Card
              key={card.publishedAt}
              title={card.title}
              description={card.description}
              imageUrl={card.urlToImage}
              keyword={searchQuery}
              date={new Date(card.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
              source={card.source.name}
              card={card}
              onDeleteArticle={onDeleteArticle}
              showText={false}
              showButton={false}
              isLoggedIn={isLoggedIn}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default SavedNews;
