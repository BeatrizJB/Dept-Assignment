import React from "react";
import Arrow from "../../assets/icons/icon-dropdown.svg";
import useLockBodyScroll from "./hook";

const Menu = ({ headerData }) => {
  useLockBodyScroll();

  return (
    <section className="menu">
      <div className="menu__container">
        <a className="menu__logo" href="/">
          <img src={headerData.logo} alt="Dept Logo" />
        </a>

        <div className="menu__menu-close">
          <div className="menu__button-x">
            <div className="menu__butt--line1"></div>
            <div className="menu__butt--line2"></div>
          </div>
        </div>
      </div>
      <nav className="menu__categories">
        <ul className="menu__cat--list">
          {headerData.menu.map((item) => (
            <li  key={item.id}>
              <a href={item.url}>
                <img src={Arrow} alt="Arrow Icon" className="menu__arrow" />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="menu__landen">
        <ul className="menu__landen--list">
          <li>landen</li>
          {headerData.landen.map((item) => (
            <li key={item.id}>
              <a href={item.url}>
                <img src={Arrow} alt="Arrow Icon" className="menu__arrow" />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="menu__socialMedia">
        <ul className="menu__sm--items">
          {headerData.socialMedia.map((item) => (
            <li key={item.id}>
              <a href={item.url}>
                <img src={Arrow} alt="Arrow Icon" className="menu__arrow" />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Menu