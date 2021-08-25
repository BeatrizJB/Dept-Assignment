import React from "react";
import arrow from "../assets/icons/icon-dropdown.svg";

const CardImage = ({ props }) => {
  return (
    <div>
      <img src={props.image} alt={props.alt} className="cards__card-w-img" />
      <p className="cards__card-name">{props.name}</p>
      <span className="cards__card-title">{props.title}</span>
      <button>
        <img
          src={arrow}
          alt="arrow icon"
          className="cards__button-arrow-icon"
        />
        VIEW CASE
      </button>
    </div>
  );
};

export default CardImage;
