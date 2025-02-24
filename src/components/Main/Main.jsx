import React, { useContext, useEffect, useState } from "react";
import "./Main.css";

import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import IsLoadingContext from "../context/IsLoadingContext";

function Main({newsData}) {
    const { isLoading, setIsLoading } = 
  useContext(IsLoadingContext);
  // set isLoading to true on mounting the component
  useEffect(() => {
    setIsLoading(true);
    // we simulate some time to load data
    setTimeout(() => setIsLoading(false), 3000);
  }, [setIsLoading]);
  return (
    <div className="main">
      {isLoading === false ? <NewsCard /> : <Preloader />}
    </div>
  );
}

export default Main;
