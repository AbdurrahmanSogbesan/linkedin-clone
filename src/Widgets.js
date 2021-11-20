import React from "react";
import "./Widgets.css";
import Info from "./img/info.png";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <img
          src="https://cdn-icons-png.flaticon.com/512/594/594846.png"
          alt=""
          height="10"
        />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <img src={Info} alt="Info Icon" height="25" />
      </div>
      {newsArticle("First react project!", "Top news - 9999 readers")}
      {newsArticle("Coronavirus Updates", "Top news - 1290 readers")}
      {newsArticle(
        "UNILAG on the verge of another strike?",
        "Education - 2349 readers"
      )}
      {newsArticle("Bitcoin breaks 22k", "Crypto - 1102 readers")}
      {newsArticle("Tesla hits new highs", "Cars & auto - 4503 readers")}
      {newsArticle("Is Redux too good?", "Code - 800 readers")}
    </div>
  );
}

export default Widgets;
