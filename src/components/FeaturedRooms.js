import React, { Component } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
import Loading from "./Loading";
import Room from "./Room";

export class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { featuredRooms: rooms, loading } = this.context;
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;

//export const ---> named import
// render list from array/map/component into variable
//call on variable in conditional render
//example of doing js outside render / if inside render then use {}
