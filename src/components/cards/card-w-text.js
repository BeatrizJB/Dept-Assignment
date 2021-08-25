import React from "react";
import arrow from "../assets/icons/icon-dropdown.svg";

const CardText = ({ props }) => {
  return (
    <div className="cards__card-w-text">
      <p className="cards__card-name">{props.name}</p>
      <span className="cards__card-title">{props.title}</span>
      <button>
        <img src={arrow} alt="arrow icon" className="cards__button-arrow-icon" />
        VIEW CASE
      </button>
    </div>
  );
};

export default CardText;
