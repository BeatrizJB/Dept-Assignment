import React from "react";
import Menu from "./menu";
import MenuIcon from "../assets/icons/icon-menu.svg";
import { head } from "lodash";

const Header = ({ headerData }) => {
  return (
    <header className="header">
      <div>
        <a className="header__logo" href="/">
          <img src={headerData.logo} alt="Dept Logo" />
        </a>
      </div>
      <div className="header__menu">
        <p>Menu</p>
        <a className="header__menu-icon" href="/">
          {" "}
          <img src={MenuIcon} alt="Menu Icon" />{" "}
        </a>
      </div>
      <section className="header__image-work">
        <img
          className="header__image--phone"
          src={headerData.header}
          alt={headerData.alt}
        />
        <img
          className="header__image--desktop"
          src={headerData.header}
          alt={headerData.alt}
        />
        <h1 className="header__title">{headerData.title}</h1>
        <div className="header__button-box">
          <button className="header__button--black">{headerData.button}</button>
        </div>
      </section>
    </header>
  );
};

export default Header;
