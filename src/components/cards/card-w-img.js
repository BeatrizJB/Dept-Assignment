import React from "react";
import Arrow from "../../assets/icons/icon-dropdown.svg";
import "./cards.css";

const CardImage = ({ props }) => {
  return (
    <div>
      <img src={props.image} alt={props.alt} className="cards__card-w-img" />
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

export default CardImage;
