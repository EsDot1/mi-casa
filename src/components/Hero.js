import React from "react";

const Hero = ({ children, hero }) => {
  return <header className={hero}>{children}</header>;
};

Hero.defaultProps = {
  hero: "defaultHero"
  //css class name
};

export default Hero;
