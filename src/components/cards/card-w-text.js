import React from "react";
import Arrow from "../../assets/icons/icon-dropdown.png";
import "./cards.css";

const CardText = ({ props }) => {
  return (
    <div className="cards__card-w-text">
      <p className="cards__card-name">{props.name}</p>
      <span className="cards__card-title">{props.title}</span>
      <button className="cards__button">
        <img
          src={Arrow}
          alt="arrow icon"
          className="cards__button-arrow-icon"
        />
        VIEW CASE
      </button>
    </div>
  );
};

export default CardText;
