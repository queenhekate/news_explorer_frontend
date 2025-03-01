import React, { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import "./Profile.css";

function Profile({ savedArticles, searchQuery }) {
  const { currentUser } = useContext(CurrentUserContext);
  console.log(currentUser);

  const savedArticlesCount = savedArticles.length || 0;
  const keywords = savedArticles
    .map((article) => article.keyword)
    .filter((keyword) => keyword);

  console.log("keywords:", keywords);


  const keywordCounts = keywords.reduce((acc, keyword) => {
    acc[keyword] = (acc[keyword] || 0) + 1;
    return acc;
  }, {});

  console.log("Keyword Counts:", keywordCounts);

  const sortedKeywords = Object.keys(keywordCounts).sort(
    (a, b) => keywordCounts[b] - keywordCounts[a]
  );

  console.log("Sorted Ketwords:", sortedKeywords);

  const primaryKeywords = sortedKeywords.slice(0, 2);
  const additionalKeywordsCount =
    sortedKeywords.length > 2 ? sortedKeywords.length - 2 : 0;

  return (
    <div className="profile">
      <h2 className="profile__title">Saved Articles</h2>
      <p className="profile__info">
        {currentUser.username}, you have {savedArticlesCount} saved articles
      </p>
      <p className="profile__keywords">
        By keywords: {primaryKeywords.join(", ")}
        {additionalKeywordsCount > 0 && (
          <span className="profile__info-span">
            {` and ${additionalKeywordsCount} other`}
          </span>
        )}
      </p>
    </div>
  );
}

export default Profile;
