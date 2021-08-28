import React, { useState } from "react";
import "./header.css";
import Menu from "../menu/menu";
import MenuIcon from "../../assets/icons/icon-menu.svg";

const Header = ({ headerData }) => {
  const [openMenu, setOpenMenu] = useState(false);

  // const toggleMenuOpen = () => {
  //   setOpenMenu(true)
  // }

  // const toggleMenuClose = () => {
  //   setOpenMenu(false);
  // };

  return (
    <header className="header">
      <section className="header__navigation">
        <a className="header__logo" href="/">
          <img src={headerData.logo} alt="Dept Logo" />
        </a>

        <div className="header__menu">
          <p>MENU</p>
          <span className="header__menu-icon" /*onClick={setOpenMenu(true)}*/>
            <img src={MenuIcon} alt="Menu Icon" />
          </span>
        </div>
      </section>
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
      {/* {openMenu && (
        <Menu headerData={headerData} onClose={() => setOpenMenu(false)} />
      )} */}
    </header>
  );
};

export default Header;