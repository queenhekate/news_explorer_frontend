import React, { useContext, useState } from "react";
import "./Main.css";

import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import IsLoadingContext from "../context/IsLoadingContext";

function Main({newsData}) {
  const { isLoading } = useContext(IsLoadingContext);
  return (
    <div className="main">
      {isLoading === false ? <NewsCard /> : <Preloader />}
    </div>
  );
}

export default Main;
