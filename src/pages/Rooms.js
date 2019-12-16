// rafce
import React from "react";
import { Link } from "react-router-dom";

import RoomContainer from "../components/RoomContainer";
import Banner from "../components/Banner";
import Hero from "../components/Hero";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms" subtitle="">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
};

export default Rooms;
