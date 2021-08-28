import React from "react";
import "./clients.css"

const Clients = ({ clientsIntro, clientsLogo }) => {
  return (
    <section className="clients">
      <h4 className="clients__title">{clientsIntro.title}</h4>
      <article className="clients__text">{clientsIntro.text}</article>
      <div className="clients__logos--phone">
        {clientsLogo.slice(0, 6).map((client) => (
          <div key={client.id} className="clients__logo">
            <img src={client.image} alt={client.alt} />
          </div>
        ))}
      </div>
      <div className="clients__logos--desktop">
        {clientsLogo.slice(0, 16).map((client) => (
          <div key={client.id} className="clients__logo">
            <img src={client.image} alt={client.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
