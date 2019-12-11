import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

import Title from "./Title";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Austin iPhone organic viral thundercats, cornhole chambray master cleanse readymade gochujang lomo."
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info:
          "Thundercats cardigan sustainable hexagon four dollar toast etsy. Tousled you probably haven't heard of them."
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "DIY tbh humblebrag coloring book leggings banh mi godard church-key etsy pabst unicorn. "
      },
      {
        icon: <FaBeer />,
        title: "ranked brewery",
        info:
          "Master cleanse selfies unicorn pop-up. Hoodie letterpress direct trade squid af, pickled prism tumblr flannel."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
// as section with a title component and
