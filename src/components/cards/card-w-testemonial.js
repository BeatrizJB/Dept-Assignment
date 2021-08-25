import React from "react";

const CardTestemonial = ({ props }) => {
  return (
    <div className="cards__cards-w-testemonial">
      <span className="cards__card-text">{props.text}</span>
      <p className="cards__card-author">{props.author}</p>
    </div>
  );
};

export default CardTestemonial;
