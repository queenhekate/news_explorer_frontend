import React, {useContext} from "react";
import "./Preloader.css";
import IsLoadingContext from "../../context/IsLoadingContext";

function Preloader() {
  const { isLoading } = useContext(IsLoadingContext);
  return (
    <div className="preloader">
      <div className={isLoading ? "preloader__circle" : "preloader__circle__hidden"}></div>
      <p className="preloader__text">Searching for news...</p>
    </div>
  );
}

export default Preloader;
