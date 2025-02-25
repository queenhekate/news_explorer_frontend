import React, { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import "./Profile.css";

function Profile() {
  const { currentUser } = useContext(CurrentUserContext);

  const savedArticlesCount = currentUser.savedArticlesCount || 0;
  const keywords = currentUser.keywords || [];
  const primaryKeywords = keywords.slice(0, 2);
  const additionalKeywordsCount = keywords.length > 2 ? keywords.length - 2 : 0;

  return (
    <div className="profile">
      <h2 className="profile__title">Saved Articles</h2>
      <p className="profile__info">{currentUser.name}, you have {savedArticlesCount} saved articles</p>
      <p className="profile__info">By keywords {primaryKeywords.join(", ")} 
        {additionalKeywordsCount > 0 && `and ${additionalKeywordsCount} other`}
      </p>
    </div>
  );
}

export default Profile;