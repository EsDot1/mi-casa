import React, { Component } from "react";
import { RoomContext } from "../context";

export class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { featuredRooms: looms } = this.context;
    console.log(looms);
    return <div>Hello from Featured Room</div>;
  }
}

export default FeaturedRooms;
