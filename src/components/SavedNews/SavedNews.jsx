import "./SavedNews.css";
import Navigation from "../Navigation/Navigation";
import Profile from "../Profile/Profile";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";

function SavedNews({
  savedArticles,
  onDeleteArticle,
  isLoggedIn,
  searchQuery,
}) {
  return (
    <div className="saved-news">
      <Navigation />
      <Profile savedArticles={savedArticles} searchQuery={searchQuery} />
      <div className="saved-news__content">
        {savedArticles.map((card) => {
          console.log("Current card:", card); // Log each card object
          return (
            <Card
              key={card.publishedAt}
              title={card.title}
              description={card.description}
              imageUrl={card.urlToImage}
              keyword={card.keyword}
              date={new Date(card.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
              source={card.source.name}
              card={card}
              onDelete={() => onDeleteArticle(card.publishedAt)}
              showText={false}
              showButton={false}
              isLoggedIn={isLoggedIn}
              searchQuery={searchQuery}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default SavedNews;
