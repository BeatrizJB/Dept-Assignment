import React from "react";
import ArrowTop from "../../assets/icons/icon-scroll-to-top.svg";
import "./footer.css"

const Footer = ({ footerData }) => {
  const scrollToTop = () => {
    window.scroll(0, 0)
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <footer className="footer" id="footer">
      <section className="footer__directory">
        <nav className="footer__menu">
          <a className="footer__logo" href="/">
            <img src={footerData.title} alt="Dept Logo" />
          </a>
          <ul className="footer__list1">
            {footerData.menu.map((item) => (
              <li className="footer__list--item" key={item.id}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
          <ul className="footer__list2">
            {footerData.socialMedia.map((item) => (
              <li className="footer__media--item" key={item.id}>
                <a href={item.url}>
                  <img src={item.icon} alt={item.alt} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer__agency">
          <div className="footer__agency-info">
            <p>Chamber of Commercer: {footerData.chamberOfCommerce}</p>
            <p>VAT: {footerData.vat}</p>
            <p>{footerData.terms}</p>
          </div>
          <div className="footer__agency-copyright">
            <p>{footerData.copyright}</p>
          </div>
        </div>
      </section>
      <section className="footer__button">
        <button className="footer__button--top" onClick={() => scrollToTop()}>
          <img src={ArrowTop} alt="Arrow up icon" />
          TOP
        </button>
      </section>
    </footer>
  );
};

export default Footer;
