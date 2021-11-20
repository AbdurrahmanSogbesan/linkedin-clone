import React from "react";
import "./HeaderOption.css";

function HeaderOption({ img, title, onClick }) {
  return (
    <div onClick={onClick} className="headerOption">
      <img src={img} alt="" height="25" width="25" />
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
