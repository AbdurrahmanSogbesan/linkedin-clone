import React, { useState } from "react";
import "./InputOption.css";

function InputOption({ img, comp, title, onClick, isActive }) {
  

  return (
    <div className={!isActive ? "inputOption" : "liked"} onClick={onClick}>
      {img ? <img src={img} className="input__img" height="20" /> : comp}
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
