import React from "react";
import "./cards.css"

const CardTestemonial = ({ props }) => {
  return (
    <div className="cards__cards-w-testemonial">
      <div className="cards__line"></div>
      <span className="cards__card-test--text">{props.text}</span>
      <p className="cards__card-author">{props.author}</p>
    </div>
  );
};

export default CardTestemonial;
