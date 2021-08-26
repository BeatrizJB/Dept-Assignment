import React from "react";
import ArrowTop from "../assets/icons/icon-scroll-to-top.svg";

const Footer = ({ footerData }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <section className="footer__directory">
        <nav className="foot__menu">
          <a className="footer__logo" href="/">
            <img src={footerData.title} alt="Dept Logo" />
          </a>
          <ul className="footer__list">
            {footerData.menu.map((item) => (
              <li className="footer_list--item" key={item.id}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
          <ul className="footer__list">
            {footerData.socialMedia.map((item) => (
              <li className="footer_list--item" key={item.id}>
                <a href={item.url}>
                  <img src={item.icon} alt={item.alt} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer__agency-info">
          <div className="footer__agency-info--text">
            <p>Chamber of Commercer: {footerData.chamberOfCommerce}</p>
            <p>VAT: {footerData.vat}</p>
            <p>{footerData.terms}</p>
          </div>
          <div className="footer__agency-copyright">
            <p>{footerData.copyright}</p>
          </div>
        </div>
      </section>
      <section className="footer_button">
        <button className="footer_button--top" onClick={() => scrollToTop()}>
          <img src={ArrowTop} alt="Arrow up icon" />
          TOP
        </button>
      </section>
    </footer>
  );
};

export default Footer;
