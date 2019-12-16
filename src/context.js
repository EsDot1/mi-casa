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
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
    //type onwards names of form input fields in filter
  };

  //getData
  componentDidMount() {
    //getData() ---> run 1st
    let rooms = this.formatData(items);
    // ---> after this we have our formatted data
    let featuredRooms = rooms.filter(room => room.featured === true);

    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max(...rooms.map(item => item.size));

    this.setState({
      rooms,
      sortedRooms: rooms,
      featuredRooms: featuredRooms,
      loading: false,
      price: maxPrice,
      maxPrice: maxPrice,
      maxSize: maxSize
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

  handleChange = event => {
    console.log(event.target.name);
    const target = event.target;
    const name = event.target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;
    //start with all rooms
    let tempRooms = [...rooms];
    //transform capacity value
    capacity = parseInt(capacity);
    price = parseInt(price);
    //filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    //filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }
    // filter by price
    tempRooms = tempRooms.filter(room => room.price <= price);
    //filter by size
    tempRooms = tempRooms.filter(
      room => room.size >= minSize && room.size <= maxSize
    );
    //filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }
    //filter by pets
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }
    //set state
    this.setState({ sortedRooms: tempRooms });
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
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

/**
 * --------------------------
 * Math.max(...rooms.map(item=> item.price)) largest number
 
 *Setting up values in state once some data received in app 
 compdidmount

 *working with forms/form control -->nameOfInputElement is used as property name in state(holding inputElement.value) ....state={nameOfInputElement:inputElement.value}

 *so when recording form input value into state --> this.seState({[nameofInputElement:inputElement.value]}, thendoThisFunctionUsingInputValues)

 *setting onChange function in state/context ---> OOP data/functionality

 *if working with form -->onChange to see changes , then setState to record changes/aka form element value 

 *attching function that uses new state values  after setting state to get real time effect
 this.setState() is asynchronous 

 handleChange(passing event)---> event.target/type/name/value
 ---> input type involved (select-one== select element)
 ---> input name involved 
 ---> input value involved ---> value recorded
 checkbx value is --> ebent.target.checked


 */
