import React, { Component } from "react";
import items from "./data";

export const RoomContext = React.createContext();
//component object
//<RoomContext.Provider value={}

export class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true
  };

  //getData
  componentDidMount() {
    //getData() ---> run 1st
    let rooms = this.formatData(items);
    // ---> after this we have our formatted data
    let featuredRooms = rooms.filter(room => room.featured === true);
    this.setState({
      rooms,
      sortedRooms: rooms,
      featuredRooms: featuredRooms,
      loading: false
      //of true no rendering ---> laoder can run
    });
  }
  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(
        image => image.fields.file.url
        //now images is an array of rrom pics
      );
      let room = { ...item.fields, id, images };
      return room;
    });
    return tempItems;
  }

  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };
  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
  //props if the component you give to withRoomConsumer has its own props (e.g rooms below )
  //<RoomFilter rooms={rooms}
}

export default { RoomProvider, RoomContext, RoomConsumer, withRoomConsumer };
//setting a method in state available through context
