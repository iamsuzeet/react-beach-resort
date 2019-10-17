import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, reiciendis!"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, reiciendis!"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, reiciendis!"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, reiciendis!"
      }
    ]
  };

  render() {
    const { services } = this.state;
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {services.map((service, index) => {
            return (
              <article key={index} className="service">
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
