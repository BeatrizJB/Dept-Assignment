import React from "react";
import Arrow from "../../assets/icons/icon-dropdown.svg";
import closeX from "../../assets/icons/close.png"
import useLockBodyScroll from "./hook";
import "./menu.css"

const Menu = ({ headerData, onClose }) => {
  useLockBodyScroll();


  return (
    <section className="menu">
      <div className="menu__container">
        <a className="menu__logo" href="/">
          <img src={headerData.logo} alt="Dept Logo" />
        </a>
        
          <div className="menu__menu-close" onClick={onClose}>
            <img src={closeX} alt="Close icon" className="x" />
          </div>
      </div>
      
      <nav className="menu__categories">
        <ul className="menu__cat--list">
          {headerData.menu.map((item) => (
            <li key={item.id}>
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
      <div className="menu__media">
        <ul className="menu__media--list">
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